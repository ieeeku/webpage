import Image from "next/image";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Avatar({
  name,
  src,
  size = "md",
}: {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dims = {
    sm: "h-14 w-14 text-[0.85rem]",
    md: "h-20 w-20 text-[1.1rem]",
    lg: "h-28 w-28 text-[1.5rem]",
  }[size];

  if (src) {
    return (
      <div className={`relative shrink-0 overflow-hidden rounded-lg ${dims}`}>
        <Image src={src} alt={name} fill sizes="160px" className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-lg border border-tertiary/40 bg-neutral font-mono font-medium text-tertiary ${dims}`}
      aria-hidden="true"
    >
      {initials(name)}
    </div>
  );
}
