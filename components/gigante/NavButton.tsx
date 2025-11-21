"use client";

import Link from "next/link";
import clsx from "clsx";

type NavButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavButton({ href, children }: NavButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-2 rounded-lg text-sm font-semibold border border-gray-300",
        "bg-white hover:bg-gray-100 transition shadow-sm"
      )}
    >
      {children}
    </Link>
  );
}