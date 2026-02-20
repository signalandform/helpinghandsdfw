import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/donate", label: "Donate" },
  { href: "/resources", label: "Resources" },
  { href: "/support", label: "Support" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-stone-800">Helping Hands DFW</p>
            <p className="mt-1 text-sm text-stone-600">
              Supporting our homeless neighbors in the Dallas–Fort Worth community.
            </p>
          </div>
          <ul className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-stone-600 transition-colors hover:text-teal-600"
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
              className="text-teal-600 hover:underline"
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
