import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
    <main className=" h-screen w-screen flex items-center">
      <section className=" h-full w-1/5  border-r-2  ">
      <SideBar/>
      </section>
      <section className=" h-full w-4/5 ">

      </section>
    </main>
  );
};

export default Dashboard;
