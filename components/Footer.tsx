import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/donate", label: "Donate" },
  { href: "/resources", label: "Resources" },
  { href: "/support", label: "Support" },
  { href: "/next-steps", label: "Next Steps" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src="/logo.png"
              alt="Helping Hands DFW"
              width={140}
              height={38}
              className="h-8 w-auto sm:h-9"
            />
            <p className="mt-1 text-sm text-stone-600">
              Supporting our homeless neighbors in the Dallas–Fort Worth community.
            </p>
          </div>
          <ul className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-stone-600 transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 border-t border-stone-200 pt-8 text-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Helping Hands DFW. All rights reserved.</p>
          <p className="mt-1">
            Contact:{" "}
            <a
              href="mailto:info@helpinghandsdfw.org"
              className="text-accent hover:underline"
            >
              info@helpinghandsdfw.org
            </a>
          </p>
          {/* Placeholder for future social links */}
          <div className="mt-4 flex justify-center gap-4">
            <span className="text-stone-400">Social links coming soon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
