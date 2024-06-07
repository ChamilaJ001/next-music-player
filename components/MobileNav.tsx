import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { Sidebar } from "./sidebar";
import { playlists } from "@/data/playlists";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <FiMenu size={23} className="mt-1" />
      </SheetTrigger>
      <SheetContent className="w-[300px]" side={"left"}>
        <SheetHeader>
          <SheetTitle className="text-start px-7">
            <Link href={"/"} className="flex items-center gap-2">
              <Image src="/img/logo-2.png" alt="logo" width={35} height={30} />
              <h1 className="font-bold text-24">NextMusix</h1>
            </Link>
          </SheetTitle>
          <SheetDescription className="text-start p-0">
            <Sidebar playlists={playlists} className="px-0" />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
