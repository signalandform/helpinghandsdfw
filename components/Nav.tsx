import Link from "next/link";

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
          className="text-xl font-semibold tracking-tight text-stone-800 transition-colors hover:text-teal-700"
        >
          Helping Hands DFW
        </Link>
        <ul className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-stone-600 transition-colors hover:text-teal-600"
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
