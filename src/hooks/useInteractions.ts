import { useState } from "react";
import { likePost, rePost, savePost } from "@/utils/action";
import { socket } from "@/socket";
import { useUser } from "@clerk/nextjs";
import { PostInteractionsProps } from "@/types/interface";

export function useInteractions({
  postId,
  username,
  count,
  isLiked,
  isRePosted,
  isSaved,
}: PostInteractionsProps) {
  const { user } = useUser();

  const [state, setState] = useState({
    likes: count.likes,
    isLiked,
    rePosts: count.rePosts,
    isRePosted,
    isSaved,
  });

  //  define a type so notify is optional
  type InteractionHandler = {
    api: (postId?: number) => Promise<void>;
    update: (prev: typeof state) => typeof state;
    notify?: "like" | "rePost";
  };

  const interactionHandlers: Record<
    "likes" | "rePosts" | "saves",
    InteractionHandler
  > = {
    likes: {
      api: likePost,
      update: (prev) => ({
        ...prev,
        likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
        isLiked: !prev.isLiked,
      }),
      notify: "like",
    },
    rePosts: {
      api: rePost,
      update: (prev) => ({
        ...prev,
        rePosts: prev.isRePosted ? prev.rePosts - 1 : prev.rePosts + 1,
        isRePosted: !prev.isRePosted,
      }),
      notify: "rePost",
    },
    saves: {
      api: savePost,
      update: (prev) => ({ ...prev, isSaved: !prev.isSaved }),
      // no notify here
    },
  };

  const handleAction = async (type: keyof typeof interactionHandlers) => {
    if (!user) return;

    const handler = interactionHandlers[type];
    const prev = state;
    const next = handler.update(prev);

    setState(next); // optimistic update

    // only emit if notify exists and user is doing the positive action
    if (
      handler.notify &&
      !prev[
        `is${
          handler.notify[0].toUpperCase() + handler.notify.slice(1)
        }` as keyof typeof prev
      ]
    ) {
      socket.emit("send-notification", {
        receiverUsername: username,
        data: {
          senderUsername: user.username!,
          type: handler.notify,
          link: `/${username}/status/${postId}`,
        },
      });
    }

    try {
      await handler.api(postId);
    } catch (error) {
      console.error(`${type} action failed:`, error);
      setState(prev); // revert on failure
    }
  };

  return { state, handleAction };
}
