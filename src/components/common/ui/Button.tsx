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
  disabled = false,
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="py-2 px-4 font-semibold bg-white text-black rounded-full disabled:cursor-not-allowed disabled:bg-slate-200"
    >
      {actionText}
    </button>
  );
}
