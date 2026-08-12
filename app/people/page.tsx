import type { Metadata } from "next";
import Avatar from "@/components/Avatar";
import { membersByTier, tierLabels, Member } from "@/lib/data/team";

export const metadata: Metadata = { title: "People" };

function MemberName({ member, size }: { member: Member; size: "lg" | "sm" }) {
  const nameClass =
    size === "lg" ? "mt-2 text-h1 text-primary" : "font-medium text-primary";

  return member.email ? (
    <a href={`mailto:${member.email}`}>
      <p className={nameClass}>{member.name}</p>
    </a>
  ) : (
    <p className={nameClass}>{member.name}</p>
  );
}

function MemberInfo({ member, size }: { member: Member; size: "lg" | "sm" }) {
  return (
    <div className={size === "lg" ? "" : "mt-4"}>
      <span className="font-mono text-label uppercase text-tertiary">
        {member.position}
      </span>

      <MemberName member={member} size={size} />

      <p
        className={
          size === "lg"
            ? "mt-1 text-body text-secondary"
            : "mt-1 text-[0.85rem] text-secondary"
        }
      >
        {member.department}
      </p>
    </div>
  );
}

function FeaturedMember({ member }: { member: Member }) {
  return (
    <div className="flex flex-col items-start gap-6 rounded-lg bg-surface p-8 sm:flex-row sm:items-center">
      <Avatar name={member.name} src={member.avatar} size="lg" />
      <MemberInfo member={member} size="lg" />
    </div>
  );
}

function MemberCard({
  member,
  size,
}: {
  member: Member;
  size: "md" | "sm" | "lg";
}) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-surface p-6 text-center">
      <Avatar name={member.name} src={member.avatar} size={size} />
      <MemberInfo member={member} size="sm" />
    </div>
  );
}

export default function PeoplePage() {
  const advisor = membersByTier(0);
  const leadership = membersByTier(1);
  const executive = membersByTier(2);
  const coordinators = membersByTier(3);
  const committee = membersByTier(4);

  return (
    <main>
      <section className="border-b border-secondary/20">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 md:px-10 md:pb-14 md:pt-20">
          <p className="font-mono text-label uppercase text-tertiary">
            # People
          </p>

          <h1 className="mt-3 text-display-sm text-primary">
            The branch, by committee.
          </h1>

          <p className="mt-4 max-w-lg text-body text-secondary">
            Students across multiple engineering departments run the branch —
            from the chair down to the coordinators who plan each society&apos;s
            calendar.
          </p>
        </div>
      </section>

      <section className="border-b border-secondary/20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-16">
          <p className="font-mono text-label uppercase text-secondary">
            {tierLabels[0].kicker}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {advisor.map((member) => (
              <FeaturedMember key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-secondary/20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-16">
          <p className="font-mono text-label uppercase text-secondary">
            {tierLabels[1].kicker}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {leadership.map((member) => (
              <FeaturedMember key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-secondary/20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-16">
          <p className="font-mono text-label uppercase text-secondary">
            {tierLabels[2].kicker}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {executive.map((member) => (
              <MemberCard key={member.name} member={member} size="lg" />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-secondary/20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-16">
          <p className="font-mono text-label uppercase text-secondary">
            {tierLabels[3].kicker}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {coordinators.map((member) => (
              <MemberCard key={member.name} member={member} size="lg" />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-20">
          <p className="font-mono text-label uppercase text-secondary">
            {tierLabels[4].kicker}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {committee.map((member) => (
              <MemberCard key={member.name} member={member} size="lg" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
