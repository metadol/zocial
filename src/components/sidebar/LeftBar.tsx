// LeftBar.tsx
import Link from "next/link";
import IKImageWrapper from "../media/IKImageWrapper";
import { menuList } from "@/utils/data";
import SocketProvider from "@/providers/SocketProvider";

interface LeftBarProps {
  isMobile?: boolean;
}

const LeftBar = ({ isMobile = false }: LeftBarProps) => {
  // MOBILE VERSION - Horizontal navigation at bottom
  if (isMobile) {
    return (
      <div className="flex justify-around items-center py-3 px-4">
        {menuList?.slice(0, 4).map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="flex flex-col items-center gap-1 p-2 hover:bg-[#181818] rounded-lg transition-colors"
          >
            <IKImageWrapper
              path={`/icons/${item.icon}`}
              width={24}
              height={24}
              alt={item.name}
            />
          </Link>
        ))}
      </div>
    );
  }

  // DESKTOP VERSION - Vertical sidebar on left
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* Top Section - Logo, Menu, Post Button */}
      <div className="flex flex-col gap-4 text-lg items-center 2xl:items-start">
        {/* Logo */}
        <Link
          href="/"
          className="p-2 hover:bg-[#181818] rounded-full transition-colors"
        >
          <IKImageWrapper
            path="/icons/logo.svg"
            width={24}
            height={24}
            alt="logo"
          />
        </Link>

        {/* Menu Items */}
        <div className="flex flex-col gap-4">
          {menuList?.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="flex items-center gap-4 p-2 hover:bg-[#181818] rounded-full transition-colors"
            >
              <IKImageWrapper
                path={`/icons/${item.icon}`}
                width={24}
                height={24}
                alt={item.name}
              />
              <span className="hidden 2xl:inline">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Post Button */}
        <Link
          href="/compose/post"
          className="bg-white text-black rounded-full flex items-center justify-center w-12 h-12 hover:bg-gray-200 transition-colors 2xl:px-20 2xl:py-2 2xl:w-auto 2xl:h-auto"
        >
          <IKImageWrapper
            path="/icons/post.svg"
            width={24}
            height={24}
            alt="new post"
            className="2xl:hidden"
          />
          <span className="hidden 2xl:block font-bold">Post</span>
        </Link>
      </div>

      {/* Bottom Section - User Profile */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <IKImageWrapper
              path="/general/avatar.png"
              width={40}
              height={40}
              alt="user"
            />
          </div>
          <div className="hidden 2xl:flex flex-col">
            <span className="font-bold">Lama Dev</span>
            <span className="text-sm text-textPrimary">@lamaWebDev</span>
          </div>
        </div>
        <div className="hidden 2xl:block cursor-pointer font-bold hover:bg-[#181818] p-2 rounded-full transition-colors">
          ...
        </div>
        
      </div>

      <SocketProvider/>
    </div>
  );
};

export default LeftBar;