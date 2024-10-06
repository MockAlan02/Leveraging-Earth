"use client";

import FoodCard from "@/components/FoodCard";
import FoodList from "@/components/FoodList";
import Header from "@/components/header";
import Menu from "@/components/menu";
import { useEffect, useState } from "react";


export default function Home() {
  return (
    <div>
      <Menu />
      <Header />
      <FoodList />
    </div>
  );
}
