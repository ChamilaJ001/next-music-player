"use client";

import HomePage from "@/components/homepage";
import { usePathname } from "next/navigation";
import AddMusic from "./add-music/page";

// export const metadata: Metadata = {
//   title: "Music App",
//   description: "Example music app using the components.",
// }

const Home = () => {
  const pathname = usePathname();
  return (
    <div className="h-full px-4 py-6 lg:px-8">
      {pathname === "/" ? (
        <HomePage />
      ) : pathname === "/add-music" ? (
        <AddMusic />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
