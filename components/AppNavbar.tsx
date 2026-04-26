"use client";

import { links } from "@/constants";
import { uppercase } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = Object.entries(links).map(([key, value]) => ({
  text: uppercase(key),
  href: value,
}));

const paths = new Set(Object.values(links));

export default function AppNavbar() {
  const pathname = usePathname();

  if (!paths.has(pathname)) {
    return;
  }

  return (
    <nav className="border-border capped-width mx-4 border-b py-4">
      <div />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">ADDU Student Personality Test</h1>
        <ul className="flex gap-8">
          {routes.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="hover:text-text-primary text-text-secondary"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <button className="primary-action">Login</button>
      </div>
      <div />
    </nav>
  );
}
