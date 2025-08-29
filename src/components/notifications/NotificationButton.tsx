import NavIcon from "../common/icons/NavIcon";
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
        <NavIcon
          path="icons/notification.svg"
          alt="notification"
          count={count}
        />
      </div>
      <span className="hidden 2xl:inline">Notifications</span>
    </button>
  );
}
