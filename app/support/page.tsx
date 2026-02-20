import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Helping Hands DFW",
  description:
    "Volunteer with Helping Hands DFW, join community events, or get in touch to support our homeless neighbors in Dallas–Fort Worth.",
};

export default function Support() {
  return (
    <div>
      <section className="bg-gradient-to-b from-accent-light to-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
            Support Us
          </h1>
          <p className="mt-6 text-lg text-stone-600">
            There are many ways to get involved. Whether you volunteer, join a
            drive, or spread the word—every effort helps.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="space-y-12">
          {/* Volunteer */}
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-stone-800">Volunteer</h2>
            <p className="mt-4 text-stone-600">
              Join us for outreach events, donation drives, and community
              activities. We&apos;re always looking for helping hands.
            </p>
            <a
              href="mailto:volunteer@helpinghandsdfw.org"
              className="mt-6 inline-flex items-center font-medium text-accent hover:underline"
            >
              Email us to volunteer →
            </a>
          </div>

          {/* Events & Drives */}
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-stone-800">
              Events & Drives
            </h2>
            <p className="mt-4 text-stone-600">
              We organize clothing drives, hygiene kit assemblies, and outreach
              events throughout the year. Stay tuned for upcoming opportunities.
            </p>
            <div className="mt-6 rounded-lg bg-stone-50 p-6">
              <p className="text-sm text-stone-600">
                Event calendar and sign-up coming soon. Contact us to be notified
                of upcoming events.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-stone-800">
              Get in Touch
            </h2>
            <p className="mt-4 text-stone-600">
              Have questions, ideas, or want to partner with us? We&apos;d love to
              hear from you.
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <span className="font-medium text-stone-700">General:</span>{" "}
                <a
                  href="mailto:info@helpinghandsdfw.org"
                  className="text-accent hover:underline"
                >
                  info@helpinghandsdfw.org
                </a>
              </li>
              <li>
                <span className="font-medium text-stone-700">Donations:</span>{" "}
                <a
                  href="mailto:donate@helpinghandsdfw.org"
                  className="text-accent hover:underline"
                >
                  donate@helpinghandsdfw.org
                </a>
              </li>
              <li>
                <span className="font-medium text-stone-700">Volunteer:</span>{" "}
                <a
                  href="mailto:volunteer@helpinghandsdfw.org"
                  className="text-accent hover:underline"
                >
                  volunteer@helpinghandsdfw.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
