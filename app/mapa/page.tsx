// app/page.js

"use client"
import Menu from "@/components/menu";
import weatherJson from "../../public/data/weather.json";
import MapComponent from "@/components/mapComponents";
import SnowRateLegend from "@/components/SnowRateLegend";
import precipation from "@/public/data/precipitation.json";

import dynamic from 'next/dynamic';
import DrawSquareMap from "@/components/SelectableAreaMap";

// Cargar dinámicamente SelectableAreaMap para evitar que se ejecute en el servidor
const SelectableAreaMap = dynamic(() => import('@/components/SelectableAreaMap'), {
  ssr: false, // Esto desactiva el renderizado en el lado del servidor
});


export default function Home() {
const data : any[] = weatherJson;
console.log(precipation);  
return (
    
    <div>
      <Menu bgColor="bg-white" txtColor= "black" />
      {/* <MapComponent eventsData={data} /> */}
      <MapComponent eventsData={data}/>
    </div>
  );
}
