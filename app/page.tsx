"use client";
import FoodList from "@/components/FoodList";
import Header from "@/components/header";
import Menu from "@/components/menu";



export default function Home() {
  return (
    <div>
      <Menu />
      <Header />
      <FoodList />
    </div>
  );
}
