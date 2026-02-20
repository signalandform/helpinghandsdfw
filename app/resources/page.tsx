import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Helping Hands DFW",
  description:
    "Find shelters, food banks, and support services for people experiencing homelessness in the Dallas–Fort Worth area.",
};

const resources = [
  {
    category: "Shelters & Housing",
    items: [
      {
        name: "Austin Street Center",
        description: "Emergency shelter and services for men and women.",
        link: "https://www.austinstreet.org",
      },
      {
        name: "The Bridge Homeless Recovery Center",
        description: "Comprehensive homeless recovery services in Dallas.",
        link: "https://www.bridgenorthtexas.org",
      },
      {
        name: "Union Gospel Mission",
        description: "Shelter, meals, and life-skills programs.",
        link: "https://www.ugm.org",
      },
    ],
  },
  {
    category: "Food & Meals",
    items: [
      {
        name: "North Texas Food Bank",
        description: "Food distribution and partner pantry network.",
        link: "https://www.ntfb.org",
      },
      {
        name: "The Stewpot",
        description: "Meals, mail, and support services in downtown Dallas.",
        link: "https://www.thestewpot.org",
      },
      {
        name: "Tarrant Area Food Bank",
        description: "Food assistance across Tarrant County.",
        link: "https://www.tafb.org",
      },
    ],
  },
  {
    category: "Health & Support",
    items: [
      {
        name: "Metro Dallas Homeless Alliance",
        description: "Coordinated access and homeless services information.",
        link: "https://www.mdhadallas.org",
      },
      {
        name: "211 Texas",
        description: "Statewide resource referral hotline.",
        link: "https://www.211texas.org",
      },
    ],
  },
];

export default function Resources() {
  return (
    <div>
      <section className="bg-gradient-to-b from-teal-50 to-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
            Resources
          </h1>
          <p className="mt-6 text-lg text-stone-600">
            A curated list of shelters, food banks, and support services for
            people experiencing homelessness in the Dallas–Fort Worth area.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="space-y-12">
          {resources.map(({ category, items }) => (
            <div key={category}>
              <h2 className="mb-6 text-xl font-semibold text-stone-800">
                {category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {items.map(({ name, description, link }) => (
                  <a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <h3 className="font-semibold text-teal-700">{name}</h3>
                    <p className="mt-2 text-sm text-stone-600">{description}</p>
                    <span className="mt-3 inline-block text-sm font-medium text-teal-600">
                      Visit website →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-stone-500">
          This list is provided for reference. Please contact each organization
          directly for current hours, eligibility, and availability.
        </p>
      </section>
    </div>
  );
}
