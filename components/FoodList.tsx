import { useEffect, useState } from "react";
import { Food } from "@/app/types/food"; // Asegúrate de que la ruta sea correcta
import foodList from "../public/data/food.json"; // Importar el archivo JSON
import { FaSearch } from "react-icons/fa"; // Importar el icono de búsqueda de react-icons
import Image from "next/image";

export default function FoodList() {
  const [foods, setFoods] = useState<Food[]>([]); // Estado para todos los productos
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]); // Estado para productos filtrados
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  useEffect(() => {
    // Cargar los datos del archivo JSON ubicado en la carpeta public
    const fetchData = async () => {
      setFoods(foodList as Food[]); // Asignar los datos al estado foods
      setFilteredFoods(foodList as Food[]); // Inicializar el filtro con todos los productos
    };

    fetchData();
  }, []);

  // Función para manejar el filtro de búsqueda
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value); // Actualizar el término de búsqueda

    // Filtrar los productos según el término de búsqueda
    const filtered = foods.filter(
      (food) =>
        food.name.toLowerCase().includes(value) ||
        food.description.toLowerCase().includes(value)
    );
    setFilteredFoods(filtered); // Actualizar los productos filtrados
  };

  return (
    <div className="p-8">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-4 text-center">productos</h1>

      {/* Buscador */}
      <div className="flex justify-center mb-8">
        <div className="relative w-[50%]">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Buscar productos..."
            className="w-full p-2 border border-gray-300 rounded pl-10 text-gray-800"
          />
          <FaSearch className="absolute left-2 top-2 text-gray-500" />
        </div>
      </div>

      {/* Lista de productos */}
      <div className="flex flex-wrap justify-center gap-8">
        {filteredFoods.map((food) => (
          <div key={food.id} className="border p-4 max-w-sm">
            <Image
              src={food.image}
              alt={food.name}
              className="w-full h-60 object-cover"
              width={200} // Aquí defines el ancho
              height={200}
            />
            <h2 className="text-xl font-bold mt-4">{food.name}</h2>
            <p>{food.description}</p>
            <span
              className={`px-2 py-1 text-white rounded ${
                food.status === "good"
                  ? "bg-green-500"
                  : food.status === "average"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            >
              {food.status === "good"
                ? "Buen alimento para la zona"
                : food.status === "average"
                ? "Alimento aceptable"
                : "Mal alimento para la zona"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
