import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaMoneyCheck } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";

const sidebarheadings = [
  {
    id: 1,
    title: "DASHBOARD",
  },
  {
    id: 2,
    title: "CHARTS",
  },
  {
    id: 3,
    title: "AUTH",
  },
];
const sidebarContent = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdSpaceDashboard />,
  },
  {
    id: 2,
    title: "Product",
    icon: <AiFillProduct />,
  },
  {
    id: 3,
    title: "Customer",
    icon: <BsPeopleFill />,
  },
  {
    id: 4,
    title: "Transaction",
    icon: <FaMoneyCheck />,
  },
];
const SideBar = () => {
  return (
    <>
      <div className=" flex items-center justify-center w-full h-16 bg-neutral-600">
        <h1 className=" text-2xl">LOGO</h1>
      </div>
      {/* {sidebarheadings.map(({ id, title }) => (
        <div key={id}>
          {title}
        </div>
      ))} */}
      {sidebarContent.map((id, icon, title) => (
            <div key={id}>
              {icon}
              {title}
            </div>
          ))}
    </>
  );
};

export default SideBar;
