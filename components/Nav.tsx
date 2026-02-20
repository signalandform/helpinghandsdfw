import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/donate", label: "Donate" },
  { href: "/resources", label: "Resources" },
  { href: "/support", label: "Support" },
];

export default function Nav() {
  return (
    <header className="border-b border-stone-200/80 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="Helping Hands DFW"
            width={180}
            height={48}
            priority
            className="h-20 w-auto sm:h-24"
          />
        </Link>
        <ul className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-stone-600 transition-colors hover:text-primary"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
