import Feed from "@/components/feed/Feed";
import Shared from "@/components/feed/Shared";
import { prisma } from "@/utils/prisma";
import Link from "next/link";

const Page = async () => {

  const allUsers = await prisma.user.findMany()

  return (
    <div>
      <div className="flex items-center justify-between border-b text-textPrimary border-borderGray sticky top-0 bg-blurBlack backdrop-blur-md z-50">

        <Link
          href={"/login"}
          className="flex items-center justify-center flex-1 px-4 pt-4 hover:bg-[#121212]"
        >
          <span className="flex items-center pb-3 border-b-4 border-iconBlue">
            For you
          </span>
        </Link>
        <Link href={"/login"} className="flex items-center justify-center flex-1 px-4 pt-4 hover:bg-[#121212]">
          
          <span className="flex items-center pb-3 border-b-4 border-iconBlue border-hidden">
          Following
          </span>
        </Link>
      </div>

      <Shared />
      <Feed />
    </div>
  );
};
export default Page;
