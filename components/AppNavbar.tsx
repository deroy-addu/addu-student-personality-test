import { links } from "@/constants";
import { uppercase } from "@/utils";
import Link from "next/link";

const routes = Object.entries(links).map(([key, value]) => ({
  text: uppercase(key),
  href: value,
}));

export default function AppNavbar() {
  return (
    <nav>
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
