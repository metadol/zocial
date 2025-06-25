import LeftBar from "@/components/sidebar/LeftBar";
import RightBar from "@/components/sidebar/RightBar";

export default function BoardLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex flex-col sm:flex-row justify-between max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      {/* Left Sidebar */}
      <aside className="px-2 xs:px-4 2xl:px-8">
        <LeftBar />
      </aside>

      {/* Main Content */}
      <main className="flex-[2.5] border-x border-borderGray lg:max-w-screen-sm ">
        {children}
        {modal}
      </main>

      {/* Right Sidebar (Hidden on smaller screens) */}
      <aside className="hidden ml-4 md:ml-8 lg:flex flex-1">
        <RightBar />
      </aside>
    </div>
  );
}
