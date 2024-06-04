"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  return (
    <header className="flex h-12 d:container px-4 w-full align-middle border-b-zinc-300">
      <nav className="flex w-full justify-between items-center z-50">
        <h2 className="text-xl font-semibold tracking-wide flex gap-2.5 items-center">
            國道定位Demo
        </h2>
        <div className="flex justify-center items-center gap-2">
        </div>
      </nav>
    </header>
  );
}