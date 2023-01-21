import clsx from "clsx";
import React from "react";
import Header from "./Header";
import MobileSideBar from "./MobileSidebar";
import Sidebar from "./Sidebar";
import MainNav from "./MainNav";

interface IContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx("mx-auto w-full h-full bg-gray-200", className)}
      {...props}
    >
      <div className="flex flex-no-wrap">
        <MainNav className="bg-primaryDark w-24" />
        <Sidebar className="bg-secondaryDark w-[400px]" />
        <MobileSideBar />
        <div className="w-full">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
