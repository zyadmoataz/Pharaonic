"use client";

import React, { useSyncExternalStore } from "react";
import Link from "next/link";
import {
  SignedIn as ClerkSignedIn,
  SignedOut as ClerkSignedOut,
  SignInButton as ClerkSignInButton,
  UserButton as ClerkUserButton,
  SignIn as ClerkSignIn,
  SignUp as ClerkSignUp,
} from "@clerk/nextjs";
import { useAuthState } from "@/components/providers/auth-provider";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function useSafeUser() {
  const { isLoaded, isSignedIn, user } = useAuthState();
  return { isLoaded, isSignedIn, user };
}

export function useSafeAuth() {
  const { isLoaded, isSignedIn, userId } = useAuthState();
  return { isLoaded, isSignedIn, userId };
}

export function SafeSignedIn({ children }: { children: React.ReactNode }) {
  const { isAuthConfigured } = useAuthState();
  if (!isAuthConfigured) return null;
  return <ClerkSignedIn>{children}</ClerkSignedIn>;
}

export function SafeSignedOut({ children }: { children: React.ReactNode }) {
  const { isAuthConfigured } = useAuthState();
  if (!isAuthConfigured) return <>{children}</>;
  return <ClerkSignedOut>{children}</ClerkSignedOut>;
}

export function SafeSignInButton({
  children,
  ...props
}: React.ComponentProps<typeof ClerkSignInButton>) {
  const { isAuthConfigured } = useAuthState();
  if (!isAuthConfigured) {
    return (
      <Link href="/sign-in" className="inline-flex items-center">
        {children}
      </Link>
    );
  }
  return <ClerkSignInButton {...props}>{children}</ClerkSignInButton>;
}

export function SafeUserButton(
  props: React.ComponentProps<typeof ClerkUserButton>
) {
  const { isAuthConfigured } = useAuthState();
  if (!isAuthConfigured) return null;
  return <ClerkUserButton {...props} />;
}

export function SafeSignIn(props: React.ComponentProps<typeof ClerkSignIn>) {
  const { isAuthConfigured } = useAuthState();
  const mounted = useMounted();

  if (!isAuthConfigured) {
    return (
      <div className="p-8 rounded-3xl bg-zinc-950 border border-white/10 text-center space-y-3">
        <p className="text-xs font-black uppercase tracking-widest text-gold">
          Authentication Unavailable
        </p>
        <p className="text-sm text-zinc-400">
          Configure <code className="text-zinc-200">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> to enable sign-in.
        </p>
      </div>
    );
  }

  if (!mounted) {
    return (
      <div className="w-full max-w-md h-[480px] rounded-[3rem] bg-zinc-950/80 border border-white/10 animate-pulse" />
    );
  }

  return <ClerkSignIn {...props} />;
}

export function SafeSignUp(props: React.ComponentProps<typeof ClerkSignUp>) {
  const { isAuthConfigured } = useAuthState();
  const mounted = useMounted();

  if (!isAuthConfigured) {
    return (
      <div className="p-8 rounded-3xl bg-zinc-950 border border-white/10 text-center space-y-3">
        <p className="text-xs font-black uppercase tracking-widest text-gold">
          Registration Unavailable
        </p>
        <p className="text-sm text-zinc-400">
          Configure <code className="text-zinc-200">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> to enable registration.
        </p>
      </div>
    );
  }

  if (!mounted) {
    return (
      <div className="w-full max-w-md h-[520px] rounded-[3rem] bg-zinc-950/80 border border-white/10 animate-pulse" />
    );
  }

  return <ClerkSignUp {...props} />;
}
