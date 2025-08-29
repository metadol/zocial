export interface ImageSettings {
  type: "original" | "wide" | "square";
  sensitive: boolean;
}

export interface ImageEditorProps {
  onClose: () => void;
  previewURL: string;
  settings: ImageSettings;
  setSettings: React.Dispatch<React.SetStateAction<ImageSettings>>;
}

export interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url?: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

export interface SVGIconProps {
  className?: string;
  path?: string;
  onClick?: () => void;
}

export interface IKVideoWrapperProps {
  path: string;
  className?: string;
}

export interface IKImageWrapperProps {
  path: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  src?: string; // Added src prop for direct URL usage
}

export interface IconProps {
  className?: string;
  onClick?: () => void;
}

export interface PostProps {
  type?: "post" | "status";
}

export interface HeaderProps {
  title: string;
  className?: string;
}

export interface LogoIconProps {
  size?: number | string;
  className?: string;
}


export interface UserPageProps {
  params: Promise<{ username: string }>;
}

export interface FeedProps {
  userProfileId?: string;
}

export interface ActionButtonProps {
  actionText?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export interface ProfileActionsProps {
  isFollowing?: boolean;
  profileId?: string;
}

export interface AvatarProps {
  path?: string | null
  className?: string
  width?: number
  height?: number
  alt?: string
  src?: string // Added src prop for direct URL usage
}
export interface AvatarWithNameProps {
  img: string | null; // Avatar image path
  name: string | null;        // Display name
  username: string | null;    // Username (without @)
}

export interface PostInteractionsProps {
  count: {
    likes: number;
    comments: number;
    rePosts: number;
  };
  isLiked?: boolean;
  isRePosted?: boolean;
  isSaved?: boolean;
  postId?: number;
  username?: string;
}

export interface NotificationType {
  id: string;
  senderUsername: string;
  type: "like" | "comment" | "rePost" | "follow";
  link: string;
}


export type IconColor = "iconBlue" | "iconGreen" | "iconRed";

export interface ColorClasses {
  text: string;
  textHover: string;
  fill: string;
  fillHover: string;
}


export interface Interaction {
  icon?: React.ComponentType<SVGIconProps>;
  count?: number;
  hoverColor?: IconColor;
  color?: IconColor; // Default color
  action?: () => void;
}
