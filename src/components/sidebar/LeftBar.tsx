import Link from "next/link";
import IKImageWrapper from "../media/IKImageWrapper";
import { menuList } from "@/utils/data";

const LeftBar = () => {
  return (
    <div className="hidden h-screen sticky bottom-0 sm:top-0 sm:flex sm:flex-col justify-between pt-2 pb-8">
      <div className="flex flex-col gap-4 text-lg items-center 2xl:items-start">
        {/* LOGO */}
        <Link href={"/"} className="p-2 hover:bg-[#181818] rounded-full">
          <IKImageWrapper
            path={"/icons/logo.svg"}
            width={24}
            height={24}
            alt={"logo"}
          />
        </Link>

        {/* MENU-LIST */}
        <div className="flex sm:flex-col gap-4">
          {menuList?.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="flex items-center gap-4 p-2 hover:bg-[#181818] rounded-full"
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

        {/* POST-BUTTON */}
        <Link
          href="/compose/post"
          className="bg-white text-black rounded-full flex items-center justify-center 
              2xl:px-20 2xl:py-2 2xl:font-bold 2xl:w-auto 2xl:h-auto 
              w-12 h-12"
        >
          <IKImageWrapper
            path="/icons/post.svg"
            width={24}
            height={24}
            alt="new post"
            className="2xl:hidden"
          />
          <span className="hidden 2xl:block">Post</span>
        </Link>

        
      </div>

      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <IKImageWrapper
              path={`/general/avatar.png`}
              width={100}
              height={100}
              alt={"user"}
            />
          </div>
          <div className="hidden 2xl:flex flex-col">
            <span className="font-bold">Lama Dev</span>
            <span className="text-sm text-textPrimary">@lamaWebDev</span>
          </div>
        </div>
        <div className="hidden 2xl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};
export default LeftBar;
