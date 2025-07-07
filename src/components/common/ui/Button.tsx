"use client";
import { useRouter } from "next/navigation";
import IKImageWrapper from "@/components/media/IKImageWrapper";
import { ActionButtonProps } from "@/types/interface";

export function BackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} aria-label="Go back">
      <IKImageWrapper path="icons/back.svg" width={24} height={24} alt="back" />
    </button>
  );
}

export function ActionButton({
  actionText = "Follow",
  onClick,
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 font-semibold bg-white text-black rounded-full"
    >
      {actionText}
    </button>
  );
}
