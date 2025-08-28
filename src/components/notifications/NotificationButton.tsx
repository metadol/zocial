import IKImageWrapper from "../media/IKImageWrapper";

export default function NotificationButton({
  count,
  onClick,
}: {
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      aria-label="Toggle notifications"
      className="cursor-pointer p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
      onClick={onClick}
    >
      <div className="relative">
        <IKImageWrapper
          path="icons/notification.svg"
          alt="notification"
          width={24}
          height={24}
        />
        {count > 0 && (
          <span className="absolute -top-3 -right-3 w-5 h-5 bg-iconBlue rounded-full flex items-center justify-center text-xs font-bold text-white">
            {count}
          </span>
        )}
      </div>
      <span className="hidden xxl:inline">Notifications</span>
    </button>
  );
}
