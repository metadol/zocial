import IKImageWrapper from "../media/IKImageWrapper";
import Post from "../feed/Post";

const Comments = () => {
  return (
    <div className="border-t border-borderGray">
      <form className="flex flex-wrap items-center gap-4 p-4">
        <div className="w-10 h-10 min-w-[40px] rounded-full overflow-hidden">
          <IKImageWrapper
            path="general/avatar.png"
            alt="Lama Dev"
            width={100}
            height={100}
          />
        </div>

        <input
          type="text"
          className="flex-1 min-w-[150px] bg-transparent outline-none p-2 text-xl"
          placeholder="Post your reply"
        />

        <button className="py-2 px-4 font-bold bg-white text-black rounded-full shrink-0">
          Reply
        </button>
      </form>

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Comments;
