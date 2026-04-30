"use client";

import { links } from "@/constants";
import CapWidth from "@/layouts/CapWidth";
import { usePathname } from "next/navigation";

const allowedPaths = [links.home, links.results];

export default function GlobalFooter() {
  const pathname = usePathname();

  if (!allowedPaths.some(({ path }) => path === pathname)) {
    return;
  }

  return (
    <footer className="h-full bg-gray-900">
      <CapWidth>
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
      </CapWidth>
    </footer>
  );
}
