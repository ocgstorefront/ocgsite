import clsx from 'clsx';

export default function LogoIcon({
  className,
}: {
  className?: string;
  classNameMark?: string;
  classNameType?: string;
}) {
  return (
    <svg
      className={className}
      width="180"
      height="40"
      viewBox="0 0 180 40"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gummy icon */}
      <circle cx="20" cy="20" r="16" fill="#F5A623" />
      <circle cx="14" cy="16" r="3" fill="#fff" opacity="0.6" />
      <path
        d="M12 24 Q20 30 28 24"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      {/* Text: ON CALL */}
      <text
        x="44"
        y="18"
        fontFamily="DM Sans, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill="#3A3E3E"
      >
        ON CALL
      </text>
      {/* Text: GUMMIES */}
      <text
        x="44"
        y="34"
        fontFamily="DM Sans, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill="#F5A623"
      >
        GUMMIES
      </text>
    </svg>
  );
}
