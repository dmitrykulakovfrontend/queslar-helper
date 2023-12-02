import React from "react";
import { SiReadthedocs } from "react-icons/si";
import { useMenu } from "../providers/MenuContext";
import { HiUserGroup } from "react-icons/hi";

type Props = {};

const Sidebar = (props: Props) => {
  const { menu, setMenu } = useMenu();
  const sidebarNav = [
    {
      icon: HiUserGroup,
      name: "General",
      kingdomOnly: false,
    },
    {
      icon: HiUserGroup,
      name: "Score",
      kingdomOnly: true,
    },
    {
      icon: HiUserGroup,
      name: "Targets",
      kingdomOnly: true,
    },
    {
      icon: HiUserGroup,
      name: "Catacombs",
      kingdomOnly: false,
    },
    {
      icon: HiUserGroup,
      name: "Income",
      kingdomOnly: false,
    },
    {
      icon: HiUserGroup,
      name: "Battle View",
      kingdomOnly: true,
    },
    {
      icon: HiUserGroup,
      name: "House",
      kingdomOnly: false,
    },
    {
      icon: HiUserGroup,
      name: "Battle Stats",
      kingdomOnly: true,
    },
    {
      icon: HiUserGroup,
      name: "Partners",
      kingdomOnly: false,
    },
    {
      icon: HiUserGroup,
      name: "Progress",
      kingdomOnly: true,
    },
    {
      icon: HiUserGroup,
      name: "Homestead",
      kingdomOnly: false,
    },
    {
      icon: HiUserGroup,
      name: "Fighters",
      kingdomOnly: false,
    },
    {
      icon: HiUserGroup,
      name: "Dungeons",
      kingdomOnly: false,
    },
  ];
  return (
    <aside
      id="sidebar"
      className={`${
        menu
          ? "w-64 flex-1 px-3 shadow-md border-r-2 border-gray-200"
          : "w-0 px-0 flex-0 shadow-none border-none"
      } fixed top-0 left-0 z-20 flex flex-col  flex-shrink-0  h-full min-h-0  pt-16 pb-4 space-y-1 overflow-y-auto duration-150 bg-white    lg:flex transition-all lg:!w-64 lg:!px-3 lg:!flex-1 lg:!border-r-2 lg:!border-gray-200 lg:!shadow-md`}
      aria-label="Sidebar"
    >
      <div
        className={`fixed top-0 z-10 left-64 bottom-0 pointer-events-none right-0  ${
          menu ? "opacity-50" : "opacity-0"
        } bg-gray-900 lg:hidden transition-opacity`}
      ></div>
      <ul className="pt-2 pb-2 space-y-2">
        {sidebarNav.map((link) => (
          <li key={link.name}>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <link.icon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span className="flex-1 ml-3 whitespace-nowrap">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
