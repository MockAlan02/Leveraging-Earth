import dynamic from "next/dynamic";
import Menu from "@/components/menu";
import weatherJson from "../../public/data/weather.json";

// Cargar dinámicamente MapComponent para evitar que se ejecute en el servidor
const MapComponent = dynamic(() => import("@/components/mapComponents"), {
  ssr: false, // Desactiva el renderizado en el servidor
});

export default function Home() {
  const data = weatherJson;

  return (
    <div>
      <Menu bgColor="bg-white" txtColor="black" />
      <MapComponent eventsData={data} />
    </div>
  );
}
