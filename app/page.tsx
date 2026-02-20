import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent-light to-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Image
            src="/logo.png"
            alt="Helping Hands DFW"
            width={560}
            height={150}
            priority
            className="mx-auto h-80 w-auto sm:h-[25rem]"
          />
          <p className="mt-6 text-xl font-semibold italic text-primary sm:text-2xl">
            Homeless, not hope-less
          </p>
          <p className="mt-6 text-lg leading-relaxed text-stone-600 sm:text-xl">
            A community of friends working together to support our homeless
            neighbors in the Dallas–Fort Worth area.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="w-full rounded-lg bg-primary px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-primary-hover sm:w-auto"
            >
              Donate
            </Link>
            <Link
              href="/support"
              className="w-full rounded-lg border-2 border-primary px-8 py-3 text-center font-semibold text-primary transition-colors hover:bg-accent-light sm:w-auto"
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
              <h3 className="font-semibold text-primary">Donate</h3>
              <p className="mt-2 text-sm text-stone-600">
                Give financially or contribute in-kind items to support our work.
              </p>
            </Link>
            <Link
              href="/resources"
              className="rounded-xl border border-stone-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-primary">Resources</h3>
              <p className="mt-2 text-sm text-stone-600">
                Find shelters, food banks, and services for those in need.
              </p>
            </Link>
            <Link
              href="/support"
              className="rounded-xl border border-stone-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-primary">Support</h3>
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
