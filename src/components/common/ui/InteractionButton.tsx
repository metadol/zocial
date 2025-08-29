import { ColorClasses, IconColor, Interaction, SVGIconProps } from "@/types/interface";


const colorMap: Record<IconColor, ColorClasses> = {
  iconBlue: {
    text: "text-iconBlue",
    textHover: "group-hover:text-iconBlue",
    fill: "fill-iconBlue",
    fillHover: "group-hover:fill-iconBlue",
  },
  iconGreen: {
    text: "text-iconGreen",
    textHover: "group-hover:text-iconGreen",
    fill: "fill-iconGreen",
    fillHover: "group-hover:fill-iconGreen",
  },
  iconRed: {
    text: "text-iconRed",
    textHover: "group-hover:text-iconRed",
    fill: "fill-iconRed",
    fillHover: "group-hover:fill-iconRed",
  },
};



const InteractionButton = ({
  icon: Icon,
  count,
  hoverColor,
  color,
  action,
}: Interaction) => {
  const iconClasses = [
    color ? colorMap[color].fill : "fill-textPrimary",
    hoverColor ? colorMap[hoverColor].fillHover : "",
  ].filter(Boolean).join(" ");

  const textClasses = [
    color ? colorMap[color].text : "",
    hoverColor ? colorMap[hoverColor].textHover : "",
  ].filter(Boolean).join(" ");

  return (
    <form action={action}>
      <button
        className={`flex items-center gap-2 ${hoverColor ? "cursor-pointer" : ""} group`}
      >
        {Icon && <Icon className={iconClasses} />} 
        {count !== undefined && <span className={`text-sm ${textClasses}`}>{count}</span>}
      </button>
    </form>
  );
};

export default InteractionButton;
