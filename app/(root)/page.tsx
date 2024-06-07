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
    <div className="h-full px-2 py-6 ">
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
