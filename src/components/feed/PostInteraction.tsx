"use client";

import { extraInteractions, interactions, optimisticActions } from "@/utils/data";
import InteractionButton from "../common/ui/InteractionButton";
import { PostInteractionsProps } from "@/types/interface";
import { likePost, rePost, savePost } from "@/action";
import React from "react";

const PostInteractions: React.FC<PostInteractionsProps> = ({
  count,
  isLiked,
  isRePosted,
  isSaved,
  postId
}) => {
  const [state, setState] = React.useState({
    likes: count.likes,
    isLiked: isLiked,
    rePosts: count.rePosts,
    isRePosted,
    isSaved,
  });


  const handleLike = async () => {
    // Update state immediately (no optimistic update needed)
    const newIsLiked = !state.isLiked;
    const newLikes = newIsLiked ? state.likes + 1 : state.likes - 1;

    setState(prev => ({
      ...prev,
      likes: newLikes,
      isLiked: newIsLiked,
    }));

    try {
      await likePost(postId);
      // Server action succeeded, state already updated
    } catch (error) {
      console.error("Like action failed:", error);
      // Revert the state on error
      setState(prev => ({
        ...prev,
        likes: state.likes,
        isLiked: state.isLiked,
      }));
    }
  };

  const handleRepost = async () => {
    // Update state immediately (no optimistic update needed)
    const newIsRePosted = !state.isRePosted;
    const newRePosts = newIsRePosted ? state.rePosts + 1 : state.rePosts - 1;

    setState(prev => ({
      ...prev,
      rePosts: newRePosts,
      isRePosted: newIsRePosted,
    }));

    try {
      await rePost(postId);
      // Server action succeeded, state already updated
    } catch (error) {
      console.error("Repost action failed:", error);
      // Revert the state on error
      setState(prev => ({
        ...prev,
        rePosts: state.rePosts,
        isRePosted: state.isRePosted,
      }));
    }
  };

  const handleSave = async () => {
    // Update state immediately (no optimistic update needed)
    const newIsSaved = !state.isSaved;

    setState(prev => ({
      ...prev,
      isSaved: newIsSaved,
    }));

    try {
      await savePost(postId);
      // Server action succeeded, state already updated
    } catch (error) {
      console.error("Save action failed:", error);
      // Revert the state on error
      setState(prev => ({
        ...prev,
        isSaved: state.isSaved,
      }));
    }
  };

  const handleShare = () => {
    console.log("Shared!");
  };

  const handleComment = () => {
    console.log("Comment clicked");
  };

  const interactionConfig = {
    likes: {
      color: state.isLiked ? "iconRed" : undefined,
      action: handleLike,
      count: state.likes,
    },
    rePosts: {
      color: state.isRePosted ? "iconGreen" : undefined,
      action: handleRepost,
      count: state.rePosts,
    },
    saves: {
      color: state.isSaved ? "iconBlue" : undefined,
      action: handleSave,
      count: undefined,
    },
    comments: {
      color: undefined,
      action: handleComment,
      count: count.comments,
    },
    shares: {
      color: undefined,
      action: handleShare,
      count: undefined,
    },
  } as const;

  return (
    <div className="flex items-center justify-between gap-4 my-2 sm:gap-12 lg:gap-16 text-textPrimary">
      <div className="flex items-center justify-between flex-1">
        {interactions.map((interaction) => (
          <InteractionButton
            key={interaction.value}
            icon={interaction.icon}
            hoverColor={interaction.hoverColor}
            count={interactionConfig[interaction.value].count}
            color={interactionConfig[interaction.value].color}
            action={interactionConfig[interaction.value].action}
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        {extraInteractions.map((interaction, index) => (
          <InteractionButton
            key={index}
            icon={interaction.icon}
            hoverColor={interaction.hoverColor}
            color={interactionConfig[interaction.value].color}
            action={interactionConfig[interaction.value].action}
          />
        ))}
      </div>
    </div>
  );
};

export default PostInteractions;