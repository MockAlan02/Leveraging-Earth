// Definimos la interfaz para tipar los datos del JSON
export interface Food {
    id: number;
    name: string;
    image: string;
    status: "good" | "average" | "bad"; // Solo permitimos estos tres valores
    description: string;
  }
  