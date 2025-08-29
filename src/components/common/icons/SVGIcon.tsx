import { SVGIconProps } from "@/types/interface";

const SVGIcon = ({ className, path, onClick }: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    onClick={onClick}
  >
    <path className={className} d={path} />
  </svg>
);

export default SVGIcon;
