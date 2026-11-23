import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || "";

const BACKEND_URL =
  process.env.INTERNAL_API_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "mentskool-razorpay-webhook",
    endpoint: "/api/webhooks/razorpay",
  });
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json(
        { detail: "Missing X-Razorpay-Signature header." },
        { status: 400 }
      );
    }

    if (!WEBHOOK_SECRET) {
      console.error("[Razorpay Webhook] RAZORPAY_WEBHOOK_SECRET is not configured.");
      return NextResponse.json(
        { detail: "Webhook secret is not configured on server." },
        { status: 500 }
      );
    }

    // Verify HMAC-SHA256 signature using the configured secret from environment variable
    const expectedSignature = crypto
      .createHmac("sha256", WEBHOOK_SECRET)
      .update(rawBody)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.warn("Razorpay webhook signature verification failed.");
      return NextResponse.json(
        { detail: "Invalid webhook signature." },
        { status: 400 }
      );
    }

    let eventData: any = {};
    try {
      eventData = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { detail: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    const eventName = eventData?.event || "unknown";
    console.log(`[Razorpay Webhook] Received verified event: ${eventName}`);

    // If a remote backend URL is configured, forward the verified event
    if (BACKEND_URL && !BACKEND_URL.includes("localhost")) {
      try {
        const cleanBackend = BACKEND_URL.replace(/\/api\/v1\/?$/, "");
        await fetch(`${cleanBackend}/api/webhooks/razorpay`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-razorpay-signature": signature,
          },
          body: rawBody,
        });
      } catch (forwardErr) {
        console.warn("[Razorpay Webhook] Forwarding to backend failed:", forwardErr);
      }
    }

    return NextResponse.json({
      status: "success",
      event: eventName,
    });
  } catch (err: any) {
    console.error("[Razorpay Webhook] Unexpected processing error:", err);
    return NextResponse.json(
      { detail: "Internal webhook processing error." },
      { status: 500 }
    );
  }
}
