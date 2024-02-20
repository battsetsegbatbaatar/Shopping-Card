import React, { useCallback, useEffect, useState } from "react";
import { PlusShopIcon } from "./Icon/PlusShopIcon";
import { MinusIcon } from "./Icon/MinusIcon";

const CardItem = ({ data, onAddToCart, onRemoveFromCart }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    if (itemId === itemId) {
      setCartItems([...cartItems, itemId]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((id) => id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="border border-solid rounded-xl p-4 flex flex-col gap-4 bg-sky-100 cursor-pointer  hover:text-sky-400">
      <div className="flex gap-4 justify-between">
        <h1>Product name: {data.name}</h1>
        <p className="text-slate-700">{data.category}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center gap-3">
          <h1>Price: {data.price}</h1>
          <p className="text-slate-700">Sale price: {data.sale_price}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <PlusShopIcon onClick={addToCart}></PlusShopIcon>
          <p>{clickCount}</p>
          <MinusIcon onClick={removeFromCart}></MinusIcon>
        </div>
      </div>
    </div>
  );
};

export const Card = () => {
  const [datas, setDatas] = useState([]);
  const [datasToShow, setDatasToShow] = useState(20);
  const [clickCount, setClickCount] = useState(0);

  const fetchDatas = useCallback(async () => {
    try {
      const res = await fetch("/export (1).json");
      const data = await res.json();
      setDatas(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDatas();
  }, []);

  const addToCart = (itemId) => {
    setClickCount(clickCount);
  };

  const removeFromCart = (itemId) => {
    setClickCount(clickCount);
  };

  const loadMore = () => {
    setDatasToShow(datasToShow + 4);
  };

  const calculaterTotal = (number) => {
    return datas?.reduce((acc, cur) => acc + cur.followers, 0);
  };

  return (
    <>
      <div className="flex flex-col gap-8 justify-between px-12 py-12 lg:px-[350px] lg:py-8">
        <div className="border border-solid rounded-xl p-4 flex justify-center items-center w-[800px]">
          <div>
            {datas.map((data) => {
              <CardItem
                key={data.id}
                data={data}
                onAddToCart={addToCart}
                onRemoveFromCart={removeFromCart}
              />;
            })}
          </div>
          <div>
            <div>Total Price: {calculaterTotal}</div>
            <div>Product number: {calculaterTotal.length}</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <a
              href=""
              className=" text-slate-700 cursor-pointer hover:text-sky-200"
            >
              All
            </a>
            <a
              href=""
              className=" text-slate-700 cursor-pointer hover:text-sky-200"
            >
              Activity
            </a>
            <a
              href=""
              className=" text-slate-700 cursor-pointer hover:text-sky-200"
            >
              Home
            </a>
            <a
              href=""
              className=" text-slate-700 cursor-pointer hover:text-sky-200"
            >
              Clothing
            </a>
            <a
              href=""
              className=" text-slate-700 cursor-pointer hover:text-sky-200"
            >
              Health
            </a>
            <a
              href=""
              className=" text-slate-700 cursor-pointer hover:text-sky-200"
            >
              Beauty
            </a>
            <a
              href=""
              className=" text-slate-700 cursor-pointer hover:text-sky-200"
            >
              Electronics
            </a>
          </div>
        </div>
      </div>
      <div className=" flex flex-col px-5 py-5 lg:px-[350px] lg:py-8 gap-5">
        <div className="grid grid-cols-4 justify-center gap-5">
          {datas.slice(0, datasToShow).map((data) => (
            <CardItem key={data.id} data={data} />
          ))}
        </div>
        <button onClick={loadMore}>Load More</button>
      </div>
    </>
  );
};
