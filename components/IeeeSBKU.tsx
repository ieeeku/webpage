export default function IeeeSBKU({
  className = "h-12 w-auto",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 620 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Kathmandu University IEEE Student Branch"
    >
      <text
        x="0"
        y="32"
        fill="#00629B"
        fontFamily="Arial, sans-serif"
        fontSize="29"
        fontWeight="700"
        letterSpacing="0.5"
      >
        KATHMANDU UNIVERSITY
      </text>

      <text
        x="0"
        y="75"
        fill="#00629B"
        fontFamily="Arial, sans-serif"
        fontSize="33"
        fontWeight="400"
        letterSpacing="1"
      >
        IEEE STUDENT BRANCH
      </text>
    </svg>
  );
}

