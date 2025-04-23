import { RepostIcon } from "../common/ui/InteractionIcons";
import IKImageWrapper from "../media/IKImageWrapper";
import InteractionButton from "../common/ui/InteractionButton";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteraction";
import { FileDetailsResponse, PostProps } from "@/types/interface";
import { imagekit } from "@/utils";
import IKVideoWrapper from "../media/IKIVideoWrapper";
import Link from "next/link";
import { FC } from 'react';


const Post: FC<PostProps> = async ({ type = "post" }) => {
  
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFileDetails("67f4d709432c476416efb6c3");
  console.log("fetched file", fileDetails);

  const isStatus = type === "status";
  const isImage = fileDetails?.fileType === "image";
  const isSensitive = fileDetails?.customMetadata?.sensitive;

  return (
    <div className="p-4 border-t border-borderGray">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 mb-2 text-sm font-bold text-textPrimary">
        <InteractionButton icon={RepostIcon} />
        <span>lama dev reposted</span>
      </div>

      {/* POST CONTENT */}
      <div className={`flex gap-4 ${isStatus ? "flex-col" : ""}`}>
        {/* AVATAR */}
        {!isStatus && (
          <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <IKImageWrapper
              path="general/avatar.png"
              width={100}
              height={100}
              alt="avatar"
            />
          </div>
        )}

        {/* CONTENT */}
        <div className="flex flex-col flex-1 gap-2">
          {/* POST OWNER + DATE */}
          <div className="w-full flex justify-between">
            <Link href="/lama" className="flex gap-4">
              {isStatus && (
                <div className="relative w-10 h-10 overflow-hidden rounded-full">
                  <IKImageWrapper
                    path="general/avatar.png"
                    width={100}
                    height={100}
                    alt="avatar"
                  />
                </div>
              )}
              <div
                className={`flex flex-wrap text-textPrimary ${
                  isStatus ? "flex-col gap-0 items-start" : "items-center gap-2"
                }`}
              >
                <h1 className="font-bold text-white text-md">Lama</h1>
                <span className={isStatus ? "text-sm" : ""}>@lamawebdev</span>
                {!isStatus && <span>1 day ago</span>}
              </div>
            </Link>
            <PostInfo />
          </div>

          {/* TEXT + MEDIA */}
          <Link href="/user/status/123">
            <p className={isStatus ? "text-lg" : ""}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              aliquam excepturi quia, eaque distinctio tempore tempora incidunt
              magnam velit aliquid magni impedit mollitia voluptatum repudiandae
              laudantium nemo cum, nam id.
            </p>
          </Link>

          {fileDetails &&
            (isImage ? (
              <IKImageWrapper
                path={fileDetails.filePath}
                width={fileDetails.width}
                height={fileDetails.height}
                alt="post"
                className={isSensitive ? "blur-lg" : ""}
              />
            ) : (
              <IKVideoWrapper
                path={fileDetails.filePath}
                className={isSensitive ? "blur-lg" : ""}
              />
            ))}

          {isStatus && (
            <span className="text-textPrimary">5:54 PM · Apr 8, 2025</span>
          )}

          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
