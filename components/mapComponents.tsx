"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

// components/MapComponent.js


import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";

export interface EventData {
  id: string;
  categories: { id: string; title: string }[];
  geometry: { coordinates: [number, number] }[];
  title: string;
}

//@ts-expect-error idontknow
const MapComponent = ({ eventsData }) => {
  // Posición inicial del mapa
  const position: [number, number] = [0, 0];

  // Definición de categorías y colores

  const categories = {
    wildfires: "red",
    severeStorms: "purple",
    volcanoes: "orange",
    seaLakeIce: "green",
    floods: "blue",
    snow: "white",
    drought: "black",
    temperatures: "yellow",
    landslides: "brown",
    waterColor: "pink",
    dustHaze: "gray",
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Leyenda de colores con transparencia en el lado derecho */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Fondo blanco con transparencia
          padding: "10px",
          borderRadius: "8px",
          zIndex: 1000, // Asegurarse de que esté sobre el mapa
          maxWidth: "200px",
        }}
      >
        <h4>Leyenda de Categorías:</h4>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  //@ts-expect-error idontknow
                  backgroundColor: categories[category],
                  marginRight: "10px",
                  border: "1px solid #000",
                }}
              ></div>
              <span>{category}</span>
            </li>
          ))}
        </ul>
      </div>

      <MapContainer
        center={position}
        zoom={2}
        style={{ height: "80vh", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {
        //@ts-expect-error idontknow
        eventsData.map((event ) => {
          // Verificar que haya categorías y geometría antes de acceder a ellas
          if (
            !event.categories ||
            event.categories.length === 0 ||
            !event.geometry ||
            event.geometry.length === 0
          ) {
            console.error(`Invalid data for event: ${event.id}`);
            return null; // Si no hay datos válidos, no renderiza el área
          }

          const category = event.categories[0].id;
          const coordinates = event.geometry[0].coordinates;

          // Validar que existan las coordenadas antes de intentar usarlas
          if (!coordinates || coordinates.length !== 2) {
            console.error(`Invalid coordinates for event: ${event.id}`);
            return null; // Si no hay coordenadas válidas, no renderiza el área
          }

          const position: [number, number] = [coordinates[1], coordinates[0]]; // Latitud, Longitud
          //@ts-expect-error idontknow
          const color = categories[category] || "blue"; // Usar color predeterminado si no se encuentra la categoría

          // Crear un área circular de 2 km alrededor del evento
          return (
            <Circle
              key={event.id}
              center={position}
              pathOptions={{ color }}
              radius={2500} // Radio de 2 km (2000 metros)
            >
              <Popup>
                <strong>{event.title}</strong>
                <br />
                Categoría: {event.categories[0].title}
              </Popup>
            </Circle>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
