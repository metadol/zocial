import Link from "next/link";
import IKImageWrapper from "../media/IKImageWrapper";
import { ActionButton } from "../common/ui/Button";

const recommendedUsers = [
  {
    name: "John Doe",
    username: "johnDoe",
    avatar: "general/avatar.png",
  },
  {
    name: "Jane Smith",
    username: "janeSmith",
    avatar: "general/avatar.png",
  },
  {
    name: "Dev Guru",
    username: "devguru",
    avatar: "general/avatar.png",
  },
];

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight"> Who to follow</h1>
      {recommendedUsers.map((user, index) => (
        <div key={index} className="flex items-center justify-between">
          {/* Avatar and Info */}
          <div className="flex items-center gap-2">
            <div className="relative rounded-full overflow-hidden w-10 h-10">
              <IKImageWrapper
                path={user.avatar}
                alt={user.name}
                width={100}
                height={100}
              />
            </div>
            <div>
              <h1 className="text-md font-bold">{user.name}</h1>
              <span className="text-textPrimary text-sm">@{user.username}</span>
            </div>
          </div>
          {/* Follow Button */}
          <ActionButton actionText="Follow" />
        </div>
      ))}
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;
