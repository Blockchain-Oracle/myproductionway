"use client";
import { signIn, signOut } from "next-auth/react";
// import { button } from "./ui/button"

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithoutRef<"button">) {
  return (
    <form
      action={async () => {
        await signIn(provider);
      }}
    >
      <button {...props}>Sign In</button>
    </form>
  );
}

export function SignOut(props: React.ComponentPropsWithoutRef<"button">) {
  return (
    <form
      action={async () => {
        await signOut();
      }}
      className="w-full"
    >
      <button className="w-full bg-red-700 p-0" {...props}>
        Sign Out
      </button>
    </form>
  );
}
