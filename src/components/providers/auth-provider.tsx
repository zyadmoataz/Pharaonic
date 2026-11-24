"use client";

import React, { createContext, useContext } from "react";
import { ClerkProvider, useAuth, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { getClerkPublishableKey } from "@/lib/env";

export interface AuthState {
  isAuthConfigured: boolean;
  isLoaded: boolean;
  isSignedIn: boolean;
  userId: string | null;
  user: ReturnType<typeof useUser>["user"] | null;
}

const defaultAuthState: AuthState = {
  isAuthConfigured: false,
  isLoaded: true,
  isSignedIn: false,
  userId: null,
  user: null,
};

export const AuthStateContext = createContext<AuthState>(defaultAuthState);

export function useAuthState() {
  return useContext(AuthStateContext);
}

const clerkAppearance = {
  baseTheme: dark,
  variables: {
    colorPrimary: "#D4AF37",
    colorBackground: "#0a0a0a",
    colorText: "#ffffff",
    colorTextSecondary: "#a1a1aa",
  },
  elements: {
    card: "bg-zinc-950 border border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden",
    headerTitle: "font-serif uppercase tracking-widest text-2xl",
    headerSubtitle: "text-zinc-400 font-medium",
    socialButtonsBlockButton:
      "bg-white/5 border-white/10 hover:bg-white/10 transition-all rounded-2xl",
    socialButtonsBlockButtonText: "font-bold uppercase tracking-widest text-[10px]",
    formButtonPrimary:
      "bg-gold text-zinc-950 hover:bg-white transition-all rounded-2xl font-black uppercase tracking-widest py-4",
    footerActionText: "text-zinc-400",
    footerActionLink: "text-gold hover:text-white transition-colors",
    formFieldLabel:
      "text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 ml-2",
    formFieldInput:
      "bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold transition-all",
    identityPreviewText: "text-white",
    identityPreviewEditButtonIcon: "text-gold",
  },
};

function ClerkAuthBridge({ children }: { children: React.ReactNode }) {
  const { isLoaded: authLoaded, userId } = useAuth();
  const { isLoaded: userLoaded, isSignedIn, user } = useUser();

  return (
    <AuthStateContext.Provider
      value={{
        isAuthConfigured: true,
        isLoaded: authLoaded && userLoaded,
        isSignedIn: Boolean(isSignedIn),
        userId: userId ?? null,
        user: user ?? null,
      }}
    >
      {children}
    </AuthStateContext.Provider>
  );
}

export function AppAuthProvider({ children }: { children: React.ReactNode }) {
  const publishableKey = getClerkPublishableKey();

  if (!publishableKey) {
    return (
      <AuthStateContext.Provider value={defaultAuthState}>
        {children}
      </AuthStateContext.Provider>
    );
  }

  return (
    <ClerkProvider publishableKey={publishableKey} appearance={clerkAppearance}>
      <ClerkAuthBridge>{children}</ClerkAuthBridge>
    </ClerkProvider>
  );
}
