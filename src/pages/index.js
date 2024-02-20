import Image from "next/image";
import { Inter } from "next/font/google";
import { useCallback, useEffect, useState } from "react";
import { Card } from "./components/Card";
import { ShoppingCardIcon } from "./components/Icon/ShoppingCardIcon";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);
  console.log(first);
  const fetchData = useCallback(async () => {
    const res = await fetch("/export(1).json");
    const data = await res.json();
    setData(data);
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div className="flex gap-8 justify-between px-12 py-12 lg:px-[350px] lg:py-8">
        logo
        <h1 className="text-4xl font-semibold leading-10 font-bold">
          Shopping Card
        </h1>
        <div className="flex justify-center items-center"></div>
        <ShoppingCardIcon />
      </div>

      <Card />
    </main>
  );
}
