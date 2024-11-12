"use client";
import { type Session } from "lucia";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

export type NavBarProps = {
  session: Session;
};
export default function NavBar({ session }: NavBarProps) {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  return (
    <nav className="flex h-full items-center justify-between">
      <Link href="/" className="flex items-center text-2xl font-bold">
        <Image
          src="/chad-next.png"
          alt="ChadNext logo"
          width="30"
          height="30"
          className="mr-3 rounded-full object-contain"
        />
        <p>ChadNext</p>
      </Link>
      <div className="mr-12 hidden items-center gap-12 md:flex lg:gap-16">
        <div className="space-x-6 text-center text-sm leading-loose text-muted-foreground md:text-left">
          <Link
            href="/about"
            className="font-semibold hover:underline hover:underline-offset-4"
          >
            About
          </Link>

          <Link
            href="/changelog"
            className="font-bold hover:underline hover:underline-offset-1"
          >
            Changelog
          </Link>

          <Link href={session?.userId ? "/dashboard" : "/login"}>
            <Button variant="default" className="text-md px-7 font-bold">
              {session?.userId ? "dashboard" : "login"}
            </Button>
          </Link>
        </div>
      </div>
      <Sheet open={openModal} onOpenChange={setOpenModal}>
        <SheetTrigger className="md:hidden">
          <span className="sr-only">Open Menu</span>
          <MenuBar />
        </SheetTrigger>
        <SheetContent side="bottom">
          <div className="flex flex-col place-items-center space-y-5">
            <Link
              href="/about"
              className="font-semibold hover:underline hover:underline-offset-2"
            >
              About
            </Link>
            <Link
              href="/changelog"
              className="font-semibold hover:underline hover:underline-offset-2"
            >
              Changelog
            </Link>
            <Link href={session?.userId ? "/dashboard" : "/login"}>
              <Button variant="default">
                {session?.userId ? "dashboard" : "login"}
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

const MenuBar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="fixed right-0 top-0 z-20 m-4 size-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
    />
  </svg>
);
