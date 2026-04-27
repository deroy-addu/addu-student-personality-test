"use client";

import { links } from "@/constants";
import { usePathname } from "next/navigation";

export default function GlobalFooter() {
  const pathname = usePathname();

  if (links.quiz === pathname) {
    return;
  }

  return (
    <footer className="grid h-full grid-cols-[auto_minmax(0,1500)_auto] bg-gray-900">
      <div />
      <div className="py-4 text-center text-white">
        &copy; 2026{" "}
        <a
          href="https://www.addu.edu.ph/"
          target="_blank"
          className="hover:underline"
        >
          Ateneo de Davao University
        </a>
        . All rights reserved.
      </div>
      <div />
    </footer>
  );
}
