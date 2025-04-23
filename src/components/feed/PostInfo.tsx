import IKImageWrapper from "../media/IKImageWrapper";

const PostInfo = () => {
  return (
    <div className="cursor-pointer w-4 h-4">
      <IKImageWrapper
        path="icons/infoMore.svg"
        width={16}
        height={16}
        alt="avatar"
      />
    </div>
  );
};
export default PostInfo;
