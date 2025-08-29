import { NotificationType } from "@/types/interface";

const notificationMessages: Record<NotificationType["type"], string> = {
  like: "liked your post",
  comment: "replied to your post",
  rePost: "re-posted your post",
  follow: "followed you",
};

export default function NotificationItem({
  notification,
  onClick,
}: {
  notification: NotificationType;
  onClick: (n: NotificationType) => void;
}) {
  return (
    <li
      className="cursor-pointer hover:bg-gray-100 rounded-md px-2 py-1"
      onClick={() => onClick(notification)}
    >
      <b>{notification.senderUsername}</b> {notificationMessages[notification.type]}
    </li>
  );
}
