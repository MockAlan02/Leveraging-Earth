import { Input } from "./ui/input"; // Importar el Input de ShadCN UI
import tierra from "../public/Images/tierra.webp";
import Image from "next/image"; // Importar el componente Image de Next.js

export default function Header() {
  // Ejemplo de datos para humedad, precipitación y temperatura
  const weatherData = {
    humedad: '70%',
    precipitacion: '12 mm',
    temperatura: '25°C'
  };

  return (
    <header className="relative flex flex-col justify-start items-start p-4 bg-gray-900 text-white min-h-[600px] shadow-md">
      {/* Sección del Buscador */}
      <div className="w-[90%] flex flex-col items-start">
        <div className="w-[80%] mb-[40px] mx-auto">
          <h2 className="text-2xl font-bold mb-[10px]">Search</h2>
          <Input
            type="text"
            placeholder="Search..."
            className="w-full p-2 bg-gray-800 border border-gray-700 text-white"
          />
        </div>
      </div>

      {/* Sección de la Imagen */}
      <div className="relative w-[80%] mx-auto">
        <Image
          src={tierra} // Ruta de la imagen importada
          alt="Planet"
          layout="responsive"
          width={500}
          height={400}
          className="object-cover"
        />

        {/* Sección de los Datos Climáticos superpuesta */}
        <div className="absolute bottom-10 left-10 bg-gray-800 bg-opacity-70 text-white p-6 rounded-lg shadow-lg w-[300px]">
          <h3 className="text-2xl font-bold mb-4">Climate Data</h3>
          <div className="text-lg mb-2">
            <strong>1 more:</strong> {weatherData.humedad}
          </div>
          <div className="text-lg mb-2">
            <strong>Soil Moisture:</strong> {weatherData.humedad}
          </div>
          <div className="text-lg mb-2">
            <strong>Precipitation:</strong> {weatherData.precipitacion}
          </div>
          <div className="text-lg mb-2">
            <strong>Temperature:</strong> {weatherData.temperatura}
          </div>
        </div>
      </div>
    </header>
  );
}
