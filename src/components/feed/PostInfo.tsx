import IKImageWrapper from "../media/IKImageWrapper";


/**
 * PostInfo renders an icon using IKImageWrapper for displaying
 * additional information related to a post. The icon is styled
 * to be a small clickable area, making it suitable for use as
 * an interactive element in a post interface.
 * JUST 3 DOTS ...
 */

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
