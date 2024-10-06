// components/DrawSquareMap.js
import { MapContainer, TileLayer, FeatureGroup, useMap } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { useState, useRef } from 'react';
import styles from './DrawSquareMap.module.css'; // Asegúrate de crear este archivo de estilo
import "@/app/globals.css"
const DrawSquareMap = () => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [rectangleCoords, setRectangleCoords] = useState<{ lat: number; lng: number }[] | null>(null);
  
    // Crear referencia para el FeatureGroup
    const featureGroupRef = useRef<any>(null);
  
    const handleCreated = (e: any) => {
      const { layerType, layer } = e;
      if (layerType === 'rectangle') {
        const bounds = layer.getBounds();
        const corners = [
          bounds.getSouthWest(),
          bounds.getNorthWest(),
          bounds.getNorthEast(),
          bounds.getSouthEast(),
        ];
        setRectangleCoords(corners);
  
        // Desactivar dibujo y limpiar después de crear el rectángulo
        setIsDrawing(false);
        if (featureGroupRef.current) {
          featureGroupRef.current.clearLayers(); // Limpiar el mapa después de crear el rectángulo
        }
      }
    };
  
    const toggleDrawing = () => {
      if (!isDrawing && featureGroupRef.current) {
        featureGroupRef.current.clearLayers(); // Limpiar el mapa al iniciar nuevo dibujo
      }
      setIsDrawing(!isDrawing);
    };
  
    return (
      <div>
        <div className={styles.buttonContainer}>
          <button onClick={toggleDrawing}>
            {isDrawing ? 'Desactivar Dibujo' : 'Activar Dibujo'}
          </button>
        </div>
  
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FeatureGroup ref={featureGroupRef}>
            <EditControl
              position="topright"
              onCreated={handleCreated}
              draw={{
                rectangle: isDrawing, // Habilita el dibujo de rectángulo según el estado
                polyline: false,
                polygon: false,
                circle: false,
                marker: false,
                circlemarker: false,
              }}
              edit={{
                remove: false, // Puedes deshabilitar la opción de eliminar si no es necesario
              }}
            />
          </FeatureGroup>
        </MapContainer>
  
        {rectangleCoords && (
          <div>
            <h3>Coordenadas del Cuadrado:</h3>
            <ul>
              {rectangleCoords.map((coord, index) => (
                <li key={index}>
                  Lat: {coord.lat}, Lng: {coord.lng}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default DrawSquareMap;