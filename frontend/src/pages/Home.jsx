import React from "react";

import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
const latestProduct = [
  {
    _id: 1,
    title: "sfs",
    catagory: "UKYMHYMU",
    images: ["#1", "#2"],
    quantity: 4,
    price: 200,
  },
  {
    _id: 2,
    title: "asdacc",
    catagory: "EFAFFA",
    images: ["#1", "#2"],
    quantity: 55,
    price: 24232,
  },
  {
    _id: 3,
    title: "fewfewf",
    catagory: "FAEFFF",
    images: ["#1", "#2"],
    quantity: 33,
    price: 20320,
  },
  {
    _id: 4,
    title: "sfs",
    catagory: "aewrfafvF",
    images: ["#1", "#2"],
    quantity: 342,
    price: 67657,
  },
];

const Home = () => {
  return (
    <main className=" h-screen w-screen flex flex-col">
      <section className=" w-full h-2/3 ">
        <div className=" flex p-4 justify-between items-center">
          <h3 className="text-lg">Latest Products</h3>
          <Link to="/search">
            <h4>more</h4>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 gap-2">
          {latestProduct.map(({ title, catagory, price, images, quantity }) => (
            <ProductCard
              title={title}
              catagory={catagory}
              price={price}
              images={images[0]}
              quantity={quantity}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
