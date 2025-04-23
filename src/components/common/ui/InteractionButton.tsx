import { SVGIconProps } from "@/types/interface";

type HoverColor = "iconBlue" | "iconGreen" | "iconRed";
type ColorMapType = {
  [Key in HoverColor]: {
    text: string;
    fill: string;
  };
};
interface Interaction {
  icon: React.ComponentType<SVGIconProps>;
  count?: number;
  hoverColor?: HoverColor;
}


const colorMap: ColorMapType = {
  iconBlue: {
    text: "group-hover:text-iconBlue",
    fill: "group-hover:fill-iconBlue",
  },
  iconGreen: {
    text: "group-hover:text-iconGreen",
    fill: "group-hover:fill-iconGreen",
  },
  iconRed: {
    text: "group-hover:text-iconRed",
    fill: "group-hover:fill-iconRed",
  },
};

const InteractionButton = ({ icon: Icon, count, hoverColor }: Interaction) => (
  <div
    className={`flex items-center gap-2 ${
      hoverColor ? "cursor-pointer" : ""
    } group`}
  >
    <Icon
      className={`fill-textPrimary ${
        hoverColor ? colorMap[hoverColor].fill : ""
      }`}
    />
    {count !== undefined && (
      <span
        className={`text-sm ${hoverColor ? colorMap[hoverColor].text : ""}`}
      >
        {count}
      </span>
    )}
  </div>
);

export default InteractionButton;
