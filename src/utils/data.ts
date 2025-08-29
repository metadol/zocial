import {
  CommentIcon,
  RepostIcon,
  LikeIcon,
  BookmarkIcon,
  ShareIcon,
} from "@/components/common/icons/InteractionIcons";

export const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  // {
  //   id: 4,
  //   name: "Messages",
  //   link: "/",
  //   icon: "message.svg",
  // },
  // {
  //   id: 5,
  //   name: "Bookmarks",
  //   link: "/",
  //   icon: "bookmark.svg",
  // },
  //   {
  //     id: 6,
  //     name: "Jobs",
  //     link: "/",
  //     icon: "job.svg",
  //   },
  //   {
  //     id: 7,
  //     name: "Communities",
  //     link: "/",
  //     icon: "community.svg",
  //   },
  //   {
  //     id: 8,
  //     name: "Premium",
  //     link: "/",
  //     icon: "logo.svg",
  //   },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  // {
  //   id: 10,
  //   name: "More",
  //   link: "/",
  //   icon: "more.svg",
  // },
];

export const imageStyles: Record<"original" | "wide" | "square", string> = {
  original: "h-full object-contain",
  wide: "aspect-video object-cover",
  square: "aspect-square object-cover",
};




export const interactions = [
  { icon: CommentIcon, hoverColor: "iconBlue" as const, value: "comments" as const , },
  { icon: RepostIcon, hoverColor: "iconGreen" as const, value: "rePosts" as const },
  { icon: LikeIcon, hoverColor: "iconRed" as const, value: "likes" as const },
];

export const extraInteractions = [
  { icon: BookmarkIcon, hoverColor: "iconBlue" as const, value: "saves" as const },
  { icon: ShareIcon, hoverColor: "iconBlue" as const, value: "shares" as const },
];

export const optimisticActions = {
    like: (prev: any) => ({
        ...prev,
        likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
        isLiked: !prev.isLiked,
    }),
    rePost: (prev: any) => ({
        ...prev,
        rePosts: prev.isRePosted ? prev.rePosts - 1 : prev.rePosts + 1,
        isRePosted: !prev.isRePosted,
    }),
    save: (prev: any) => ({
        ...prev,
        isSaved: !prev.isSaved,
    }),
};


