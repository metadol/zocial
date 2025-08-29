"use client";

import { useEffect, useState, useCallback } from "react";
import { socket } from "@/socket";
import { useRouter } from "next/navigation";
import NotificationButton from "./NotificationButton";
import NotificationList from "./NotificatoinList";
import { NotificationType } from "@/types/interface";


export default function Notification() {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleNotification = (data: NotificationType) => {
      setNotifications((prev) => [...prev, data]);
    };

    socket.on("get-notification", handleNotification);
    return () => {
      socket.off("get-notification", handleNotification);
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
    <div className="relative">
      <NotificationButton
        count={notifications.length}
        onClick={() => setOpen((p) => !p)}
      />
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
