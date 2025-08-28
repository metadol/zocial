import { NotificationType } from "./types";
import NotificationItem from "./NotificationItem";

export default function NotificationList({
  notifications,
  onClick,
  onReset,
}: {
  notifications: NotificationType[];
  onClick: (n: NotificationType) => void;
  onReset: () => void;
}) {
  return (
    <div className="absolute -right-full p-4 rounded-lg bg-white text-black shadow-lg w-64">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Notifications</h2>
      {notifications.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {notifications.map((n) => (
            <NotificationItem key={n.id} notification={n} onClick={onClick} />
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No new notifications</p>
      )}
      {notifications.length > 0 && (
        <button
          onClick={onReset}
          className="bg-black text-white px-3 py-1 text-sm rounded-md mt-3 hover:bg-gray-800"
        >
          Mark all as read
        </button>
      )}
    </div>
  );
}
