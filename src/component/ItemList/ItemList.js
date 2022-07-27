import React from "react";
import { Link } from "react-router-dom";

function ItemList() {
  return (
    <div className="w-full pt-24 md:pt-28 lg:pt-32">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-10">
        MRFEST 7.0 Merch
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:px-8 lg:px-16 xl:px-20 gap-10 px-5 justify-items-center mb-10 md:mb-12 lg:mb-16">
        <Link to="/detail-item/:idItem" className="w-full">
          <div className="w-full h-32 lg:h-40 rounded bg-gray-300 shadow"></div>
          <h1 className="font-bold text-xl">Nama Produk</h1> <p>Rp 200.000</p>
        </Link>

        <Link to="/detail-item/:idItem" className="w-full">
          <div className="w-full h-32 lg:h-40 rounded bg-gray-300 shadow"></div>
          <h1 className="font-bold text-xl">Nama Produk</h1> <p>Rp 200.000</p>
        </Link>

        <Link to="/detail-item/:idItem" className="w-full">
          <div className="w-full h-32 lg:h-40 rounded bg-gray-300 shadow"></div>
          <h1 className="font-bold text-xl">Nama Produk</h1> <p>Rp 200.000</p>
        </Link>

        <Link to="/detail-item/:idItem" className="w-full">
          <div className="w-full h-32 lg:h-40 rounded bg-gray-300 shadow"></div>
          <h1 className="font-bold text-xl">Nama Produk</h1> <p>Rp 200.000</p>
        </Link>

        <Link to="/detail-item/:idItem" className="w-full">
          <div className="w-full h-32 lg:h-40 rounded bg-gray-300 shadow"></div>
          <h1 className="font-bold text-xl">Nama Produk</h1> <p>Rp 200.000</p>
        </Link>

        <Link to="/detail-item/:idItem" className="w-full">
          <div className="w-full h-32 lg:h-40 rounded bg-gray-300 shadow"></div>
          <h1 className="font-bold text-xl">Nama Produk</h1> <p>Rp 200.000</p>
        </Link>

        <Link to="/detail-item/:idItem" className="w-full">
          <div className="w-full h-32 lg:h-40 rounded bg-gray-300 shadow"></div>
          <h1 className="font-bold text-xl">Nama Produk</h1> <p>Rp 200.000</p>
        </Link>
      </div>
    </div>
  );
}

export default ItemList;
