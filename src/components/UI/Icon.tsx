import React from "react";

interface IconProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  className?: string,
  color?: string,
  size?: number
}

const Icon: React.FC<IconProps> = ({ Icon, className = "", color = "", size = 18 }) => {
  return (
    <Icon
      className={className}
      width={size}
      height={size}
      fill={color}
    />
  );
};

export default Icon;
