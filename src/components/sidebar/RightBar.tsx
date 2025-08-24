import Link from "next/link";
import Recommendations from "../features/Recommendations";
import Search from "../features/Search";
import PopularTags from "../features/PopularTags";


const RightBar = () => {
  return (
    <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max">
    <Search />
    <PopularTags/>
    <Recommendations />
  </div>
  );
};
export default RightBar;
