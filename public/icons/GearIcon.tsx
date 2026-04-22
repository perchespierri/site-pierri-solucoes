import React from 'react';

type GearIconProps = {
  size?: number;
  backgroundColor?: string;
  gearColor?: string;
};

export function GearIcon({
  size = 64,
  backgroundColor = '#F5F1EA',
  gearColor = '#111111',
}: GearIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="0" fill={backgroundColor} />

      <g transform="translate(32 32)">
        {[0, 45, 90, 135].map((rotation) => (
          <g key={rotation} transform={`rotate(${rotation})`}>
            <rect
              x="-4"
              y="-24"
              width="8"
              height="12"
              rx="1"
              fill={gearColor}
            />
            <rect
              x="-4"
              y="12"
              width="8"
              height="12"
              rx="1"
              fill={gearColor}
            />
            <rect
              x="-24"
              y="-4"
              width="12"
              height="8"
              rx="1"
              fill={gearColor}
            />
            <rect
              x="12"
              y="-4"
              width="12"
              height="8"
              rx="1"
              fill={gearColor}
            />
          </g>
        ))}

        <circle r="18" fill={gearColor} />
        <circle r="10" fill={backgroundColor} />
        <circle r="3.5" fill={gearColor} />
      </g>
    </svg>
  );
}

export default GearIcon;
