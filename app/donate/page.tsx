import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate | Helping Hands DFW",
  description:
    "Support our mission with a financial donation or in-kind contribution. Every gift helps our homeless neighbors in the Dallas–Fort Worth area.",
};

export default function Donate() {
  return (
    <div>
      <section className="bg-gradient-to-b from-accent-light to-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
            Donate
          </h1>
          <p className="mt-6 text-lg text-stone-600">
            Your generosity directly supports our homeless neighbors in the DFW
            community. Every contribution—whether financial or in-kind—makes a
            difference.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="space-y-12">
          {/* Monetary donations */}
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-stone-800">
              Monetary Donations
            </h2>
            <p className="mt-4 text-stone-600">
              Financial gifts help us purchase supplies, coordinate outreach, and
              support partner organizations. We accept donations via the options
              below.
            </p>
            <div className="mt-6 rounded-lg bg-stone-50 p-6">
              <p className="text-sm font-medium text-stone-700">
                Payment options coming soon
              </p>
              <p className="mt-2 text-sm text-stone-500">
                We&apos;re setting up secure donation links (e.g., Stripe, PayPal,
                or Venmo). In the meantime, please reach out at{" "}
                <a
                  href="mailto:donate@helpinghandsdfw.org"
                  className="text-accent hover:underline"
                >
                  donate@helpinghandsdfw.org
                </a>{" "}
                to contribute.
              </p>
            </div>
          </div>

          {/* In-kind donations */}
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-stone-800">
              In-Kind Donations
            </h2>
            <p className="mt-4 text-stone-600">
              We welcome donations of clothing, blankets, hygiene items, non-
              perishable food, and other essentials. Contact us to coordinate a
              drop-off or pickup.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-1 text-stone-600">
              <li>Warm clothing and blankets</li>
              <li>Hygiene kits (soap, toothbrush, toothpaste, etc.)</li>
              <li>Non-perishable food and bottled water</li>
              <li>Socks and shoes</li>
              <li>Backpacks and duffel bags</li>
            </ul>
            <p className="mt-6">
              <a
                href="mailto:donate@helpinghandsdfw.org"
                className="inline-flex items-center font-medium text-accent hover:underline"
              >
                Contact us to arrange a donation →
              </a>
            </p>
          </div>

          {/* Impact messaging */}
          <div className="rounded-xl bg-accent-light p-8 text-center">
            <p className="text-lg font-medium text-stone-800">
              Your support helps provide warmth, dignity, and hope to those who
              need it most.
            </p>
            <p className="mt-2 text-stone-600">
              Thank you for being part of our community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
