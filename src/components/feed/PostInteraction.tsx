"use client";

import { interactions, extraInteractions } from "@/utils/data";
import InteractionButton from "../common/ui/InteractionButton";
import { PostInteractionsProps, Interaction, IconColor } from "@/types/interface";
import { useInteractions } from "@/hooks/useInteractions";

const PostInteractions: React.FC<PostInteractionsProps> = (props) => {
  const { count } = props;
  const { state, handleAction } = useInteractions(props);

  // 👇 Explicitly typed as Record<string, Interaction>
  const config: Record<string, Interaction> = {
    likes: {
      color: state.isLiked ? "iconRed" : undefined,
      count: state.likes,
      action: () => handleAction("likes"),
    },
    rePosts: {
      color: state.isRePosted ? "iconGreen" : undefined,
      count: state.rePosts,
      action: () => handleAction("rePosts"),
    },
    saves: {
      color: state.isSaved ? "iconBlue" : undefined,
      count: undefined, // 👈 explicitly include count
      action: () => handleAction("saves"),
    },
    comments: {
      count: count.comments,
      color: undefined, // 👈 keep shape consistent
      action: () => console.log("Comment clicked"),
    },
    shares: {
      count: undefined,
      color: undefined,
      action: () => console.log("Shared!"),
    },
  };

  return (
    <div className="flex items-center justify-between gap-4 my-2 sm:gap-12 lg:gap-16 text-textPrimary">
      <div className="flex flex-1 justify-between">
        {interactions.map(({ value, icon, hoverColor }) => (
          <InteractionButton
            key={value}
            icon={icon}
            hoverColor={hoverColor}
            count={config[value]?.count}
            color={config[value]?.color}
            action={config[value]?.action}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        {extraInteractions.map(({ value, icon, hoverColor }, index) => (
          <InteractionButton
            key={index}
            icon={icon}
            hoverColor={hoverColor}
            count={config[value]?.count}
            color={config[value]?.color}
            action={config[value]?.action}
          />
        ))}
      </div>
    </div>
  );
};

export default PostInteractions;
