import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaMoneyCheck } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const sidebarheadings = [
  {
    id: 1,
    title: "DASHBOARD",
    content: [
      {
        id: 1,
        title: "Orders",
        icon: <MdSpaceDashboard />,
        link: "/admin/dashoard/orders",
      },
      {
        id: 2,
        title: "Product",
        icon: <AiFillProduct />,
        link: "/admin/dashoard/products",
      },
      {
        id: 3,
        title: "Customer",
        icon: <BsPeopleFill />,
        link: "/admin/dashoard/customers",
      },
      {
        id: 4,
        title: "Transaction",
        icon: <FaMoneyCheck />,
        link: "/admin/dashoard/transactions",
      },
    ],
  },
  {
    id: 2,
    title: "CHARTS",
    content: [
      {
        id: 1,
        title: "Bar",
        icon: <MdSpaceDashboard />,
        link: "/admin/barchart",
      },
      {
        id: 2,
        title: "Pie",
        icon: <AiFillProduct />,
        link: "/admin/piechart",
      },
      {
        id: 3,
        title: "Line",
        icon: <BsPeopleFill />,
        link: "/admin/linechart",
      },
    ],
  },
  {
    id: 3,
    title: "AUTH",
    content: [
      {
        id: 1,
        title: "Logout",
        icon: <AiFillProduct />,
      },
    ],
  },
];

const SideBar = () => {
  return (
    <>
      {sidebarheadings.map(({ id, title, content }) => (
        <>
          <div className=" p-2 border-b-2 font-bold" key={id}>
            {title}{" "}
          </div>
          {content.map(({ id, title, icon, link }) => (
            <Link
              to={link}
              className="flex gap-2 p-2 items-center hover:bg-slate-400"
              key={id}
            >
              <span className="text-2xl">{icon}</span>
              <h3 className="text-lg">{title}</h3>
            </Link>
          ))}
        </>
      ))}
    </>
  );
};

export default SideBar;
