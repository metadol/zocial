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
    url: string;
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

