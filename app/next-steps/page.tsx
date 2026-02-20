import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Steps | Helping Hands DFW",
  description:
    "Strategic outline for Helping Hands DFW: mission, operations, fundraising, and action plan for our homeless outreach initiative.",
};

export default function NextSteps() {
  return (
    <div>
      <section className="bg-gradient-to-b from-accent-light to-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
            Next Steps
          </h1>
          <p className="mt-6 text-lg text-stone-600">
            Align on what Helping Hands DFW is, who we serve, how we operate
            day-to-day, and what we need to formalize.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="space-y-16">
          {/* 1) Clarify mission, scope, and success metrics */}
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-800">
              1) Clarify mission, scope, and success metrics
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  1.1 Define the &ldquo;who / what / where&rdquo;
                </h3>
                <ul className="mt-4 space-y-2 text-stone-600">
                  <li>
                    <strong className="text-stone-700">Primary mission (1 sentence):</strong>{" "}
                    Provide street outreach + resource navigation + basic survival
                    support for people experiencing homelessness in DFW.
                  </li>
                  <li>
                    <strong className="text-stone-700">Primary geography:</strong>{" "}
                    Dallas/Fort Worth + prioritized neighborhoods/areas.
                  </li>
                  <li>
                    <strong className="text-stone-700">Target population:</strong>{" "}
                    unsheltered individuals, families, youth, veterans (pick initial
                    focus).
                  </li>
                  <li>
                    <strong className="text-stone-700">What we do (initial services):</strong>
                    <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
                      <li>Street outreach (conversation, needs assessment, referral)</li>
                      <li>Resource navigation (ID, benefits, shelter, medical, mental health, detox, employment)</li>
                      <li>Distribution (water, hygiene kits, socks, blankets, etc.)</li>
                      <li>Follow-up check-ins (repeat contacts)</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-stone-700">What we don&apos;t do (for now):</strong>{" "}
                    e.g., long-term housing placement, medical care, shelter operations.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  1.2 Create 3–6 measurable outcomes (simple, trackable)
                </h3>
                <p className="mt-2 text-stone-600">
                  Pick a small set you can report monthly:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li># outreach contacts (unique people + total interactions)</li>
                  <li># successful referrals (shelter/clinic/ID/benefits)</li>
                  <li># follow-ups completed (2nd contact)</li>
                  <li># kits distributed</li>
                  <li># volunteers active / hours served</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  1.3 Minimum operating model
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li>Weekly outreach cadence (e.g., Tue/Thu evenings + Sat morning)</li>
                  <li>Coverage plan (where, when, team size)</li>
                  <li>Define &ldquo;intake&rdquo; info you record consistently (first name/alias, location, needs, referral, follow-up date)</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 rounded-lg bg-accent-light p-4 text-sm font-medium text-stone-700">
              <strong>Deliverables:</strong> 1-page &ldquo;mission + scope&rdquo; doc; simple monthly metrics sheet.
            </p>
          </div>

          {/* 2) Outreach operations */}
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-800">
              2) Outreach operations
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  2.1 Build a repeatable outreach playbook
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li>Safety guidelines (pairing, de-escalation, boundaries)</li>
                  <li>Standard outreach script (intro, consent, needs, next steps)</li>
                  <li>Resource map (most-used shelters, clinics, ID help, food, showers, case managers)</li>
                  <li>&ldquo;Referral pathway&rdquo; cheat sheet: who to call, hours, what documents needed</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  2.2 Volunteer management
                </h3>
                <p className="mt-2 text-stone-600">Define roles:</p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li>Outreach lead</li>
                  <li>Navigator (resource referral)</li>
                  <li>Logistics (supplies)</li>
                  <li>Intake note-taker</li>
                  <li>Driver</li>
                </ul>
                <p className="mt-4 text-stone-600">
                  Onboarding: background check policy (if needed), training module, code of conduct. Scheduling + attendance (simple sign-up tool).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  2.3 Partnerships (high leverage)
                </h3>
                <p className="mt-2 text-stone-600">
                  Target 5–10 local partners:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li>Shelters + day centers</li>
                  <li>Community clinics</li>
                  <li>ID/benefits assistance orgs</li>
                  <li>Faith/community orgs already doing distribution</li>
                  <li>Local businesses for in-kind donations</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 rounded-lg bg-accent-light p-4 text-sm font-medium text-stone-700">
              <strong>Deliverables:</strong> Outreach playbook v1; resource directory; volunteer roles + onboarding checklist.
            </p>
          </div>

          {/* 3) Donations + fundraising */}
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-800">
              3) Donations + fundraising
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  3.1 Donation infrastructure (simple + credible)
                </h3>
                <p className="mt-2 text-stone-600">Add to website:</p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li><strong>Donate button</strong> (Stripe, PayPal, or platform like Givebutter)</li>
                  <li><strong>In-kind wish list</strong> (Amazon or curated list)</li>
                  <li>&ldquo;Where does money go?&rdquo; transparency page</li>
                  <li>Receipt/ack email</li>
                </ul>
                <p className="mt-4 text-stone-600">
                  Create donation tiers: $25 = 10 hygiene kits, $50 = 25 pairs of socks, $100 = 2–3 outreach packs, etc. (adjust to real costs)
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  3.2 Local donor channels
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li>Small business sponsor program (monthly)</li>
                  <li>Community drives (schools, gyms, churches)</li>
                  <li>&ldquo;Supply drop&rdquo; events (1x/month)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  3.3 Story + proof (without exploiting clients)
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li>Monthly impact report (numbers + anonymized stories)</li>
                  <li>Photo policy (consent-first; avoid identifiable images unless explicit)</li>
                  <li>Short &ldquo;why we exist&rdquo; narrative on the homepage</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 rounded-lg bg-accent-light p-4 text-sm font-medium text-stone-700">
              <strong>Deliverables:</strong> Donation page; in-kind list; sponsor one-pager; monthly impact template.
            </p>
          </div>

          {/* 4) Establish the nonprofit formally */}
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-800">
              4) Establish the nonprofit formally
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  4.1 Decide legal structure + governance
                </h3>
                <p className="mt-2 text-stone-600">
                  Choose initial path: <strong>Fiscal sponsorship</strong> (fastest to accept tax-deductible donations) vs. <strong>Form Texas nonprofit</strong> + apply for <strong>501(c)(3)</strong>.
                </p>
                <p className="mt-4 text-stone-600">
                  Draft board structure (at least 3 directors): Chair/President, Treasurer, Secretary, plus 1–3 at-large. Board responsibilities: approve budget, ensure compliance, fundraising participation, policy approvals.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  4.2 Core paperwork/policies (start simple)
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li>Articles of Incorporation (TX)</li>
                  <li>Bylaws</li>
                  <li>Conflict of interest policy</li>
                  <li>Recordkeeping policy</li>
                  <li>Volunteer waiver + code of conduct</li>
                  <li>Financial controls: two-person approval for spend above threshold, receipts required, dedicated bank account</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  4.3 Admin stack
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li>Nonprofit bank account</li>
                  <li>Accounting (basic: Wave/QuickBooks)</li>
                  <li>Donation platform + receipts</li>
                  <li>Insurance (general liability; consider volunteer accident)</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 rounded-lg bg-accent-light p-4 text-sm font-medium text-stone-700">
              <strong>Deliverables:</strong> Board roster; incorporation + bylaws draft; basic policies; bank + accounting set up.
            </p>
          </div>

          {/* 5) Website + communications */}
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-800">
              5) Website + communications
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  5.1 Website must-haves for credibility
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li>Clear mission + what services you provide</li>
                  <li>&ldquo;Get Help&rdquo; page (resource navigation steps + hotline numbers + hours)</li>
                  <li>&ldquo;Volunteer&rdquo; page with next orientation date</li>
                  <li>&ldquo;Donate&rdquo; page + wish list</li>
                  <li>Contact form + email + phone (or Google Voice)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  5.2 Communication rhythm
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li>1 monthly newsletter</li>
                  <li>1–2 social posts/week (impact + needs + volunteer call)</li>
                  <li>Quarterly community update</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 rounded-lg bg-accent-light p-4 text-sm font-medium text-stone-700">
              <strong>Deliverables:</strong> Updated sitemap; copy draft; basic brand assets (logo v1, colors, fonts).
            </p>
          </div>

          {/* 6) 30 / 60 / 90 day plan */}
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-800">
              6) Action plan
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  Phase 1
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li>Finalize mission, scope, and metrics</li>
                  <li>Run 4 outreach sessions (minimum) and track outcomes</li>
                  <li>Publish website donation + volunteer pages</li>
                  <li>Build partner directory (top 15 resources)</li>
                  <li>Start fiscal sponsor conversations or start TX nonprofit incorporation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  Phase 2
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li>Formalize volunteer onboarding + training</li>
                  <li>Launch first community supply drive</li>
                  <li>Secure 2–3 recurring donors or small business sponsors</li>
                  <li>Create monthly impact report #1</li>
                  <li>Board members confirmed + first board meeting</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  Phase 3
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                  <li>If fiscal sponsor: operating smoothly + consistent donation receipts</li>
                  <li>If incorporating: file state nonprofit + begin 501(c)(3) process</li>
                  <li>Set budget + basic financial controls</li>
                  <li>Create 1–2 signature programs (e.g., &ldquo;Outreach Nights&rdquo; + &ldquo;ID/Benefits Clinic Partner Day&rdquo;)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 7) Open questions */}
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-800">
              7) Open questions for the organization
            </h2>
            <ul className="mt-6 list-inside list-disc space-y-2 text-stone-600">
              <li>What does &ldquo;success&rdquo; look like in 6 months?</li>
              <li>Which neighborhoods/areas are the priority?</li>
              <li>Are there any populations we should focus on first?</li>
              <li>Do we prefer fiscal sponsorship now, or commit to full 501(c)(3) process immediately?</li>
              <li>Who is willing to serve on the initial board and commit to fundraising?</li>
            </ul>
          </div>

          {/* Appendix */}
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-800">
              Appendix: Starter roles (who owns what)
            </h2>
            <ul className="mt-6 space-y-3 text-stone-600">
              <li><strong className="text-stone-700">Executive/Program Lead:</strong> outreach cadence, partner relationships</li>
              <li><strong className="text-stone-700">Operations Lead:</strong> supplies, logistics, safety, volunteer scheduling</li>
              <li><strong className="text-stone-700">Development Lead:</strong> donors, sponsorships, grants (later)</li>
              <li><strong className="text-stone-700">Treasurer:</strong> budget, receipts, controls</li>
              <li><strong className="text-stone-700">Web/Comms:</strong> website, newsletter, social updates</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
