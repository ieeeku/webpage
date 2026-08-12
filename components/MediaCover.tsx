import Image from "next/image";
import PlaceholderCover from "./PlaceholderCover";

export default function MediaCover({
  src,
  alt,
  label,
  kicker,
  className = "",
}: {
  src?: string;
  alt: string;
  label: string;
  kicker?: string;
  className?: string;
}) {
  if (!src) {
    return (
      <PlaceholderCover label={label} kicker={kicker} className={className} />
    );
  }

  return (
    <div className={`relative overflow-hidden bg-neutral ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
