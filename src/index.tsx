// This is a minimal reimplementation of FontAwesomeIcon
// to avoid pulling in the whole ~80kb library
// See https://docs.fontawesome.com/v5/web/use-with/react

import React from "react";

type FAIconProps = React.SVGProps<SVGSVGElement> & {
    icon: {
        icon: [
            number,
            number,
            string[],
            string,
            string
        ],
        prefix: string;
        iconName: string;
    };
    className?: string;
};

export function FAIcon({
    icon,
    className = "",
    ...svgProps
}: FAIconProps) {
    const [width, height, _aliases, _unicode, svgPathData] = icon.icon;
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix={icon.prefix}
            data-icon={icon.iconName}
            className={`fa-${icon.iconName} ${className}`}
            style={{
                boxSizing: "content-box",
                display: "inline-block",
                height: "1em",
                width: "1em",
                overflow: "visible",
                verticalAlign: "-0.125em",
            }}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${width} ${height}`}
            {...svgProps}
        >
            <path fill="currentColor" d={svgPathData}></path>
        </svg>
    );
}
