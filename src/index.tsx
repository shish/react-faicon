// This is a minimal reimplementation of FontAwesomeIcon
// to avoid pulling in the whole ~80kb library
// See https://docs.fontawesome.com/v5/web/use-with/react

import type { RefAttributes, SVGAttributes } from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface FAIconProps
  extends Omit<SVGAttributes<SVGSVGElement>, 'children' | 'mask' | 'transform'>,
    RefAttributes<SVGSVGElement> {
  icon: IconDefinition;
  className?: string;
}

export function FAIcon({ icon, className = '', ...svgProps }: FAIconProps) {
  let [width, height, _ligatures, _unicode, svgPathData] = icon.icon;
  if (typeof svgPathData === 'string') {
    svgPathData = [svgPathData];
  }
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix={icon.prefix}
      data-icon={icon.iconName}
      className={`fa-${icon.iconName} ${className}`}
      style={{
        boxSizing: 'content-box',
        display: 'inline-block',
        height: '1em',
        width: '1em',
        overflow: 'visible',
        verticalAlign: '-0.125em',
      }}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      {...svgProps}
    >
      {svgPathData.map((d, i) => (
        <path key={i} fill="currentColor" d={d}></path>
      ))}
    </svg>
  );
}
