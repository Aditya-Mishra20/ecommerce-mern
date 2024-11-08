import React from "react";
// import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <main className=" h-screen w-screen flex items-center">
      <section className=" h-full w-1/5 bg-slate-600 "></section>
      <section className=" h-full w-4/5 bg-orange-200 ">
      <Navbar/>
      </section>
    </main>
  );
};

export default Dashboard;
