"use client";

import IKImageWrapper from "@/components/media/IKImageWrapper";
import { useRouter } from "next/navigation";

const PostIcons = ["image", "gif", "poll", "emoji", "schedule", "location"];

const PostModal = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };
  return (
    <div className="absolute w-screen h-screen top-0 left-0 z-50 bg-[#293139a6] flex justify-center ">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
        {/* TOP */}
        <div className="flex justify-between items-center">
          <div onClick={closeModal} className="cursor-pointer">
            X
          </div>
          <div className="text-iconBlue font-bold">Drafts</div>
        </div>
        {/* CENTER */}
        <div className="py-8 flex gap-4">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <IKImageWrapper
              path="general/avatar.png"
              width={100}
              height={100}
              alt="avatar"
            />
          </div>
          <input
            type="text"
            placeholder="What's happening?"
            className="flex-1 bg-transparent outline-none text-lg"
          />
        </div>
        {/* BOTTOM */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-borderGray pt-4">
          <div className="flex flex-wrap gap-4">
            {PostIcons.map((icon) => (
              <IKImageWrapper
                key={icon}
                path={`icons/${icon}.svg`}
                width={20}
                height={20}
                alt={icon}
                className="cursor-pointer"
              />
            ))}
          </div>

          <button className="px-4 py-2 font-bold text-black bg-white rounded-full">Post</button>
        </div>
      </div>
    </div>
  );
};
export default PostModal;
