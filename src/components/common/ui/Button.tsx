"use client";
import { useRouter } from "next/navigation";
import IKImageWrapper from "@/components/media/IKImageWrapper";

export default function BackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} aria-label="Go back">
      <IKImageWrapper path="icons/back.svg" width={24} height={24} alt="back" />
    </button>
  );
}