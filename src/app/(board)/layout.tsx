// BoardLayout.tsx
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
    <div className="min-h-screen flex">
      {/* DESKTOP: Left Sidebar */}
      <aside className="hidden sm:block px-2 xs:px-4 2xl:px-8">
        <LeftBar />
      </aside>

      {/* MAIN CONTENT - Single main tag for both mobile and desktop */}
      <main className="flex-1 sm:flex-[2.5] sm:border-x sm:border-borderGray sm:lg:max-w-screen-sm sm:min-h-screen pb-20 sm:pb-0">
        <div className="sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl sm:mx-auto">
          {children}
          {modal}
        </div>
      </main>

      {/* DESKTOP: Right Sidebar */}
      <aside className="hidden md:flex flex-1 ml-4 md:ml-8">
        <RightBar />
      </aside>

      {/* MOBILE: Bottom Navigation */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-borderGray">
        <LeftBar isMobile={true} />
      </nav>
    </div>
  );
}