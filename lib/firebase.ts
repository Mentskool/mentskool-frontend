import { getApp, getApps, initializeApp } from "firebase/app";
import {
  Auth,
  GoogleAuthProvider,
  connectAuthEmulator,
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyFakeKeyForLocalDevOnly",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "mentskool-dev.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "mentskool-dev",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "mentskool-dev.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789012:web:abcdef123456",
};

// Initialize Firebase App instance singleton
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Connect to Firebase Auth Emulator if configured for local development
const emulatorUrl = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_URL;
if (emulatorUrl && typeof window !== "undefined") {
  // Avoid re-connecting if already connected
  const emulatorHost = emulatorUrl.startsWith("http")
    ? emulatorUrl
    : `http://${emulatorUrl}`;
  if (!(auth as any).emulatorConfig) {
    try {
      connectAuthEmulator(auth, emulatorHost, { disableWarnings: true });
      console.log(`Connected to Firebase Auth Emulator at ${emulatorHost}`);
    } catch {
      // Ignore if already connected in Fast Refresh
    }
  }
}

export default app;
