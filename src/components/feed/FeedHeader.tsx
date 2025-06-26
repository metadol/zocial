import { HeaderProps } from "@/types/interface";
import BackButton from "../common/ui/Button"; // client component
; // optional if used elsewhere


export default function FeedHeader({
  title,
  className = "",
}: HeaderProps) {
  return (
    <div
      className={`flex items-center gap-8 sticky top-0 backdrop-blur-md bg-[#00000084] p-4 z-10 ${className}`}
    >
      <BackButton />
      <h1 className="font-bold text-lg">{title}</h1>
    </div>
  );
}
