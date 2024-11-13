import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";

//Dynamic Importing - for lazy loading fetches pages only on demand
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignIn/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
