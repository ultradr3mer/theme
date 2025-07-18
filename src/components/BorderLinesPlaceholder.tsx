import React from 'react';

interface PlaceholderProps {
  /** overall size of the box (px or any CSS unit) */
  size?: number | string;
  /** color of the lines */
  strokeColor?: string;
  /** thickness of the lines in px */
  strokeWidth?: number;
  /** gap from each corner in px */
  margin?: number;
}

const BorderLinesPlaceholder: React.FC<PlaceholderProps> = ({
  size = 250,
  strokeColor = '#777',
  strokeWidth = 1,
  margin = 10,
}) => {
  // normalize size to numbers for the viewBox
  const numericSize =
    typeof size === 'number' ? size : parseInt(size as string, 10);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${numericSize} ${numericSize}`}
      style={{ background: '#111', display: 'block' }}
    >
      {/* top border, inset by margin */}
      <line
        x1={margin}
        y1={strokeWidth / 2}
        x2={numericSize - margin}
        y2={strokeWidth / 2}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* right border, inset by margin */}
      <line
        x1={numericSize - strokeWidth / 2}
        y1={margin}
        x2={numericSize - strokeWidth / 2}
        y2={numericSize - margin}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* bottom border, inset by margin */}
      <line
        x1={numericSize - margin}
        y1={numericSize - strokeWidth / 2}
        x2={margin}
        y2={numericSize - strokeWidth / 2}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* left border, inset by margin */}
      <line
        x1={strokeWidth / 2}
        y1={numericSize - margin}
        x2={strokeWidth / 2}
        y2={margin}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* diagonal from bottom‑left→top‑right, also inset */}
      <line
        x1={margin}
        y1={numericSize - margin}
        x2={numericSize - margin}
        y2={margin}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default BorderLinesPlaceholder;
