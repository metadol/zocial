import IKImageWrapper from "@/components/media/IKImageWrapper";

export default function ProfileDetails({ user }: { user: any }) {
  
  const joinDate = new Date(user.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="p-4 flex flex-col gap-2">
      {/* Name & Username */}
      <div>
        <h1 className="text-2xl font-bold">{user.displayName}</h1>
        <span className="text-textPrimary text-sm">@{user.username}</span>
      </div>

      {/* Bio */}
      <p className="text-textPrimary text-sm">{user.bio || "No bio available."}</p>

      {/* Location & Date */}
      <div className="flex gap-4 text-textPrimary text-[15px]">
        {user.location && (
          <div className="flex items-center gap-2">
            <IKImageWrapper path="icons/userLocation.svg" alt="location" width={20} height={20} />
            <span>{user.location}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <IKImageWrapper path="icons/date.svg" alt="date" width={20} height={20} />
          <span>Joined {joinDate}</span>
        </div>
      </div>

      {/* Followers & Following */}
      <div className="flex gap-4">
        {[
          { count: user._count.followers, label: "Followers" },
          { count: user._count.followings, label: "Following" },
        ].map(({ count, label }) => (
          <div key={label} className="flex items-center gap-2">
            <span className="font-bold text-sm">{count}</span>
            <span className="text-textPrimary text-[15px]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
