import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";

// Propiedades: imagen, nombre, estado (verde, rojo, amarillo)
export default function FoodCard({ imageSrc, name, status }: any) {
  // Definir el color basado en el estado
  const statusColor = status === "good" 
    ? "bg-green-500" 
    : status === "average" 
    ? "bg-yellow-500" 
    : "bg-red-500";

  const statusText = status === "good" 
    ? "Buen alimento para la zona" 
    : status === "average" 
    ? "Alimento aceptable para la zona" 
    : "Mal alimento para la zona";

  return (
    <Card className="max-w-sm border border-gray-300 shadow-lg">
      <CardHeader>
        <Image
          src={imageSrc} // Ruta de la imagen del alimento
          alt={name} // Descripción alternativa para accesibilidad
          width={400} // Ancho de la imagen
          height={300} // Altura de la imagen
          className="object-cover w-full h-60"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className={`text-lg ${statusColor} text-white rounded-full px-2 py-1 inline-block`}>
          {statusText}
        </p>
      </CardContent>
      <CardFooter className="text-center p-4">
        {/* Aquí puedes agregar más detalles o acciones si es necesario */}
      </CardFooter>
    </Card>
  );
}
