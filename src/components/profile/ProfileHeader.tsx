import IKImageWrapper from "@/components/media/IKImageWrapper";
import { Avatar } from "@/components/common/ui/Avatar";

interface ProfileHeaderProps {
  avatarPath: string | null;
  coverPath: string | null;
}

export default function ProfileHeader({ avatarPath, coverPath }: ProfileHeaderProps) {
  return (
    <div className="relative w-full">
      <div className="w-full aspect-[3/1] relative">
        <IKImageWrapper
          path={coverPath || "general/no-bg.webp"}
          width={600}
          height={200}
          alt="cover"
        />
      </div>
      <Avatar
        className="w-1/6 aspect-square border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2"
        path={avatarPath}
        width={600}
        height={600}
      />
    </div>
  );
}
