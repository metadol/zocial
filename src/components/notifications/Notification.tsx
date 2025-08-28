"use client";

import { useEffect, useState, useCallback } from "react";
import { socket } from "@/socket";
import { useRouter } from "next/navigation";
import NotificationButton from "./NotificationButton";
import NotificationList from "./NotificationList";

export type NotificationType = {
  id: string;
  senderUsername: string;
  type: "like" | "comment" | "rePost" | "follow";
  link: string;
};

export default function Notification() {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleNotification = (data: NotificationType) => {
      setNotifications((prev) => [...prev, data]);
    };

    socket.on("getNotification", handleNotification);
    return () => {
      socket.off("getNotification", handleNotification);
    };
  }, []);

  const reset = useCallback(() => {
    setNotifications([]);
    setOpen(false);
  }, []);

  const handleClick = useCallback(
    (notification: NotificationType) => {
      setNotifications((prev) => prev.filter((n) => n.id !== notification.id));
      setOpen(false);
      router.push(notification.link);
    },
    [router]
  );

  return (
    <div className="relative mb-4">
      <NotificationButton count={notifications.length} onClick={() => setOpen((p) => !p)} />
      {open && (
        <NotificationList
          notifications={notifications}
          onClick={handleClick}
          onReset={reset}
        />
      )}
    </div>
  );
}
