import * as React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoShapesOutline, IoFolderOutline } from "react-icons/io5";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { RxText } from "react-icons/rx";
import clsx from "clsx";

interface IMainNavProps {
  className?: string;
}

const MainNav: React.FC<IMainNavProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "absolute lg:relative shadow h-screen flex-col justify-between hidden lg:flex pb-12",
        className
      )}
    >
      <div className="px-4">
        <div className="h-16 w-full flex items-center"></div>
        <ul className="mt-12">
          <li className="flex flex-col items-center relative h-full justify-center w-full text-gray-300 hover:text-gray-500 cursor-pointer mb-6">
            <MdOutlineSpaceDashboard color="#FFF" size={25} />
            <span className="font-manrope text-xs text-center">Design</span>
          </li>
          <li className="flex flex-col items-center relative h-full justify-center w-full cursor-pointer mb-6 text-gray-500 hover:text-gray-300">
            <IoShapesOutline size={25} />
            <span className="font-manrope text-xs">Elements</span>
          </li>
          <li className="flex flex-col items-center relative h-full justify-center w-full cursor-pointer mb-6 text-gray-500 hover:text-gray-300">
            <AiOutlineCloudUpload size={25} />
            <span className="font-manrope text-xs">Uploads</span>
          </li>
          <li className="flex flex-col items-center relative h-full justify-center w-full cursor-pointer mb-6 text-gray-500 hover:text-gray-300">
            <RxText size={25} />
            <span className="font-manrope text-xs">Text</span>
          </li>
          <li className="flex flex-col items-center relative h-full justify-center w-full cursor-pointer mb-6 text-gray-500 hover:text-gray-300 ">
            <IoFolderOutline size={25} />
            <span className="font-manrope text-xs ">Projects</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
