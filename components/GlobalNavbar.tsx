"use client";

import { links } from "@/constants";
import { cn, uppercase } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = Object.entries(links).map(([key, { path, show }]) => ({
  text: uppercase(key),
  href: path,
  show,
}));

/**
 * The paths where this component will show.
 */
const allowedPaths = [links.home, links.results];

export default function GlobalNavbar() {
  const pathname = usePathname();

  if (!allowedPaths.some(({ path }) => path === pathname)) {
    return;
  }

  return (
    <nav className="grid max-h-20 w-full grid-cols-[auto_minmax(0,1500)_auto] border-b border-gray-300 bg-white py-4">
      <div />
      <div className="flex items-center justify-between">
        <Link href={links.home.path}>
          <h1 className="text-xl font-semibold">
            ADDU Student Personality Test
          </h1>
        </Link>
        <div className="flex items-center gap-12">
          <ul className="flex gap-8">
            {routes.map(({ text, href, show }, i) => {
              if (!show) {
                return;
              }

              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);

              return (
                <li key={i}>
                  <Link
                    href={href}
                    className={cn(
                      "pb-1 text-gray-500 hover:text-gray-900",
                      isActive && "border-b-2 border-gray-900 text-gray-900",
                    )}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className="rounded-md bg-gray-900 px-4 py-2 text-white">
            Login
          </button>
        </div>
      </div>
      <div />
    </nav>
  );
}
