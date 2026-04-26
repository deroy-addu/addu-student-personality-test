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
    <nav>
      <h1>Student Personality Test</h1>
      <ul>
        {routes.map((link, i) => (
          <li key={i}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
      <button>Login</button>
    </nav>
  );
}
