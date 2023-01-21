import * as React from "react";
import { BsSearch } from "react-icons/bs";
import clsx from "clsx";
import MediaImage from "@/components/Card/MediaImage";

interface ISidebarProps {
  className?: string;
}

const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "shadow h-screen w-full flex-col justify-between lg:flex pb-12 flex flex-wrap px-3",
        className
      )}
    >
      <div className="px-2">
        <div className="h-16 w-full flex items-center"></div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <BsSearch className="text-black-300" size={18} />
          </span>
          <input
            type="text"
            className="px-3 py-2.5 pl-9 w-full rounded-sm focus:outline-none bg-white text-secondaryDark font-manrope text-sm"
            placeholder="Search Design"
          />
        </div>

        <div className="flex flex-wrap justify-evenly mt-4">
          <MediaImage src="/media/a.jpg" />
          <MediaImage src="/media/b.jpg" />
          <MediaImage src="/media/c.jpg" />
          <MediaImage src="/media/d.jpg" />
          <MediaImage src="/media/e.jpg" />
          <MediaImage src="/media/f.jpg" />
          <MediaImage src="/media/g.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
