import React from 'react';
import { LinearGradient } from '@vx/gradient';

export default function Logo({ width, height })  {
  const midX = width / 2;
  const midY = height / 2;

  const minX = 0;
  const maxX = width;

  const minY = 0;
  const maxY = height;

  const topHeight = height / 4;
  const bottomHeight = topHeight;
  const centerHeight = topHeight * 1.5;

  const oX = 3;
  const oY = 10;

  return (
    <svg width={width} height={height}>
      <LinearGradient id="logo" from="#d8d4e4" to="#96ffff" />
      <g stroke="url(#logo)" strokeWidth={1} fill="transparent">
        <path
          d={`M${midX},${minY}
            L${maxX},${topHeight}
            L${midX + oX},${topHeight - oY}
            L${minX},${topHeight}
            L${midX},${minY}
          `}
        />
        <path
          d={`M${midX},${minY}
          L${midX + oX},${topHeight - oY}
          `}
        />
        <path
          d={`M${midX + oX},${topHeight - oY}
            L${(midX + oX) + (centerHeight / 1.5)},${topHeight + centerHeight}
            L${(midX + oX) - (centerHeight / 1.5)},${topHeight + centerHeight}
            L${midX + oX},${topHeight - oY}
          `}
        />
        <path
          d={`M${minX},${topHeight}
            L${(midX + oX) - (centerHeight / 1.5)},${topHeight + centerHeight}
          `}
        />
        <path
          d={`M${minX},${topHeight}
            L${minX},${topHeight + centerHeight + (oY * 2)}
            L${(midX + oX) - (centerHeight / 1.5)},${topHeight + centerHeight}
          `}
        />
        <path
          d={`M${maxX},${topHeight}
            L${(midX + oX) + (centerHeight / 1.5)},${topHeight + centerHeight}
          `}
        />
        <path
          d={`M${maxX},${topHeight}
            L${maxX},${topHeight + centerHeight + (oY * 2)}
            L${(midX + oX) + (centerHeight / 1.5)},${topHeight + centerHeight}
          `}
        />
        <path
          d={`M${(midX + oX) + (centerHeight / 1.5)},${topHeight + centerHeight}
            L${(midX + oX) - (centerHeight / 1.5)},${topHeight + centerHeight}
            L${midX},${maxY}
            L${(midX + oX) + (centerHeight / 1.5)},${topHeight + centerHeight}
          `}
        />
        <path
          d={`M${minX},${topHeight + centerHeight + (oY * 2)}
            L${midX},${maxY}
            L${maxX},${topHeight + centerHeight + (oY * 2)}
          `}
        />
      </g>
    </svg>
  );
}