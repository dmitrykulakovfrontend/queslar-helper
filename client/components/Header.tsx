import React from "react";
import { useMenu } from "../providers/MenuContext";
import Logo from "../public/icons/ares.svg";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { HiMenu, HiOutlineMenu, HiUserGroup } from "react-icons/hi";

type Props = {};

const Header = (props: Props) => {
  const { menu, setMenu } = useMenu();
  return (
    <nav className="fixed z-30 flex items-center justify-start w-full px-3 py-4 bg-white border-b-2 border-gray-200 lg:px-5 lg:pl-3">
      <button
        id="toggleSidebarMobile"
        aria-expanded="true"
        onClick={() => setMenu(!menu)}
        aria-controls="sidebar"
        className="p-1 mr-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
      >
        {menu ? (
          <IoMdClose className="w-6 h-6" />
        ) : (
          <HiMenu className="w-6 h-6" />
        )}
      </button>
      <a href="#" className="text-xl font-bold flex items-center lg:ml-2.5">
        <Image src={Logo} alt="" className="mr-2" width={32} height={32} />

        <span className="self-center whitespace-nowrap">Roman Empire</span>
      </a>
    </nav>
  );
};

export default Header;
