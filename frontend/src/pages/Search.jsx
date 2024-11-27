import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  return (
    <div className="container mx-auto p-6">
      <div className="flex mb-6">
        {/* <!-- Filters Section --> */}
        <div className="w-1/4 mr-6">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>

          {/* <!-- Sort By Dropdown --> */}
          <label className="block mb-2">
            Sort By:
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            >
              <option value="none">None</option>
              <option value="ascend">Price (Low to High)</option>
              <option value="descend">Price (High to Low)</option>
            </select>
          </label>

          {/* <!-- Max Price Input --> */}
          <label className="block mb-2">
            Max Price: {maxPrice || ""}
            <input
              type="range"
              min={100}
              max={1000000}
              value={maxPrice}
              onChange={(e)=>setMaxPrice(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>

          {/* <!-- Category Dropdown --> */}
          <label className="block mb-2">
            Category:
            <select className="block w-full mt-1 p-2 border border-gray-300 rounded-md">
              <option value="">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Home Appliances">Home Appliances</option>
            </select>
          </label>
        </div>

        {/* <!-- Product List Section --> */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Products</h3>

          {/* <!-- Product List --> */}
          <ul className="space-y-4">
            {/* <!-- Product Item --> */}
            <li className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md">
              <h4 className="text-lg font-medium">Product Name</h4>
              <p className="text-gray-700">Price: $100</p>
              <p className="text-gray-500">Category: Electronics</p>
            </li>
            {/* <!-- More Product Items... --> */}
          </ul>
        </div>
      </div>

      {/* <!-- Pagination Section --> */}
      <div className="flex justify-center space-x-2 mt-6">
        <button
          className="p-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
          disabled
        >
          Prev
        </button>
        <button className="p-2 rounded-md bg-blue-500 text-white">1</button>
        <button className="p-2 rounded-md bg-gray-300 text-black">2</button>
        <button className="p-2 rounded-md bg-gray-300 text-black">3</button>
        <button className="p-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300">
          Next
        </button>
      </div>
    </div>
  );
};

export default Search;
