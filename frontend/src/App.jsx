import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./Layout";

//Dynamic Importing - for lazy loading fetches pages only on demand
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
            </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
