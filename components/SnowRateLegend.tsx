'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { FC } from 'react';
import { MapContainer, TileLayer, Circle, Popup, ImageOverlay } from 'react-leaflet';
import Legend from './legend';
// Componente de leyenda que ya habíamos creado

interface MapComponentProps {
  precipitationData: any; // La estructura de datos que proporcionaste
}

const SnowRateLegend: FC<MapComponentProps> = ({ precipitationData }) => {
  // Validación de datos
  const hasValidData =
    precipitationData &&
    precipitationData[0].maps &&
    precipitationData[0].maps[1] &&
    precipitationData[0].maps[1].entries &&
    precipitationData[0].maps[1].legend;

  if (!hasValidData) return null;

  const colors = precipitationData[0].maps[1].entries.colors;
  const minLabel = precipitationData[0].maps[1].legend.minLabel;
  const maxLabel = precipitationData[0].maps[1].legend.maxLabel;
  const title = precipitationData[0].maps[1].legend.title;
  const units = precipitationData[0].maps[1].legend.units;

  // Datos ficticios de eventos (puedes reemplazar con tus coordenadas reales)
  const eventsData = [
    { id: '1', title: 'Event 1', coordinates: [40.712776, -74.005974] },
    { id: '2', title: 'Event 2', coordinates: [34.052235, -118.243683] },
    { id: '3', title: 'Event 3', coordinates: [51.507351, -0.127758] },
  ];

  // Función para asignar colores según las tasas
  const getColorForEvent = (index: number) => {
    return `#${colors[index % colors.length]}`;
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Mapa principal */}
      <MapContainer
        center={[0, 0]} // Centrado en un punto genérico
        zoom={2}
        style={{ height: '80vh', width: '100%' }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Superponer imagen como capa de fondo para simular el mapa que has proporcionado */}
        <ImageOverlay
          url="/mnt/data/image.png"  // Ruta del archivo cargado
          bounds={[
            [-90, -180], // Extensión inferior izquierda
            [90, 180],   // Extensión superior derecha
          ]}
          opacity={0.6} // Transparencia para que se vea el mapa debajo
        />

        {/* Dibujar los círculos que representan las tasas de nevadas */}
        {eventsData.map((event, index) => {
          const color = getColorForEvent(index); // Obtener color
          return (
            <Circle
              key={event.id}
              center={event.coordinates as [number, number]}
              pathOptions={{ color }}
              radius={200000} // Radio de 200 km, ajusta según sea necesario
            >
              <Popup>
                <strong>{event.title}</strong>
                <br />
                Color: {color}
              </Popup>
            </Circle>
          );
        })}
      </MapContainer>

      {/* Leyenda de colores */}
      <Legend
        colors={colors}
        minLabel={minLabel}
        maxLabel={maxLabel}
        title={title}
        units={units}
      />
    </div>
  );
};

export default SnowRateLegend;
