import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-stone-800 sm:text-5xl">
            Helping Hands DFW
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600 sm:text-xl">
            A community of friends working together to support our homeless
            neighbors in the Dallas–Fort Worth area.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="w-full rounded-lg bg-teal-600 px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-teal-700 sm:w-auto"
            >
              Donate
            </Link>
            <Link
              href="/support"
              className="w-full rounded-lg border-2 border-teal-600 px-8 py-3 text-center font-semibold text-teal-600 transition-colors hover:bg-teal-50 sm:w-auto"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-center text-2xl font-semibold text-stone-800 sm:text-3xl">
          Our Mission
        </h2>
        <p className="mt-6 text-center text-lg leading-relaxed text-stone-600">
          We believe everyone deserves dignity, shelter, and hope. Through
          donations, volunteer efforts, and community partnerships, we connect
          people in need with resources and support across the DFW metroplex.
        </p>
      </section>

      {/* Impact / Quick links */}
      <section className="border-t border-stone-200 bg-stone-50 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-semibold text-stone-800 sm:text-3xl">
            How You Can Help
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <Link
              href="/donate"
              className="rounded-xl border border-stone-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-teal-700">Donate</h3>
              <p className="mt-2 text-sm text-stone-600">
                Give financially or contribute in-kind items to support our work.
              </p>
            </Link>
            <Link
              href="/resources"
              className="rounded-xl border border-stone-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-teal-700">Resources</h3>
              <p className="mt-2 text-sm text-stone-600">
                Find shelters, food banks, and services for those in need.
              </p>
            </Link>
            <Link
              href="/support"
              className="rounded-xl border border-stone-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-teal-700">Support</h3>
              <p className="mt-2 text-sm text-stone-600">
                Volunteer, join events, or reach out to get involved.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Placeholder for future social feed */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-center text-2xl font-semibold text-stone-800 sm:text-3xl">
          Latest Updates
        </h2>
        <p className="mt-4 text-center text-stone-500">
          Social feed and updates coming soon.
        </p>
      </section>
    </div>
  );
}
