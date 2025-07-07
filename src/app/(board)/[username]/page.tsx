import { ActionButton } from "@/components/common/ui/Button";
import Feed from "@/components/feed/Feed";
import FeedHeader from "@/components/feed/FeedHeader";
import IKImageWrapper from "@/components/media/IKImageWrapper";
import { UserPageProps } from "@/types/interface";
import { prisma } from "@/utils/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

const Page = async ({ params }: UserPageProps) => {
  const { username } = await params; // ✅ await the Promise

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) return notFound();

  return (
    <div>
      {/* PROFILE HEADER */}
      <FeedHeader title="LamaDev" className="bg-blurBlack" />

      {/* PROFILE INFO */}
      <div>
        {/* COVER & AVATAR */}
        <div className="relative w-full">
          {/* COVER IMAGE */}
          <div className="w-full aspect-[3/1] relative">
            <IKImageWrapper
              path="general/cover.jpg"
              width={600}
              height={200}
              alt="cover"
            />
          </div>

          {/* AVATAR IMAGE */}
          <div className="w-1/6 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
            <IKImageWrapper
              path="general/avatar.png"
              width={600}
              height={600}
              alt="avatar"
            />
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex w-full items-center justify-end gap-2 p-2">
          {["more", "explore", "message"].map((icon) => (
            <div
              key={icon}
              className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-500 cursor-pointer"
            >
              <IKImageWrapper
                path={`icons/${icon}.svg`}
                width={20}
                height={20}
                alt={icon}
              />
            </div>
          ))}
          <ActionButton actionText="Follow" />
        </div>

        {/* USER DETAILS */}
        <div className="p-4 flex flex-col gap-2">
          {/* NAME & HANDLE */}
          <div>
            <h1 className="text-2xl font-bold">Lama Dev</h1>
            <span className="text-textPrimary text-sm">@lamaWebDev</span>
          </div>

          {/* LOCATION & JOIN DATE */}
          <div className="flex gap-4 text-textPrimary text-[15px]">
            <div className="flex items-center gap-2">
              <IKImageWrapper
                path="icons/userLocation.svg"
                alt="location"
                width={20}
                height={20}
              />
              <span>USA</span>
            </div>
            <div className="flex items-center gap-2">
              <IKImageWrapper
                path="icons/date.svg"
                alt="date"
                width={20}
                height={20}
              />
              <span>Joined May 2021</span>
            </div>
          </div>

          {/* FOLLOWERS & FOLLOWING */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">2</span>
              <span className="text-textPrimary text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">0</span>
              <span className="text-textPrimary text-[15px]">Followings</span>
            </div>
          </div>
        </div>

        {/* POSTS FEED */}
        <Feed />
      </div>
    </div>
  );
};

export default Page;
