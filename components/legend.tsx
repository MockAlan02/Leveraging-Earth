// components/Legend.tsx

import { FC } from 'react';

interface LegendProps {
  colors: string[];
  minLabel: string;
  maxLabel: string;
  title: string;
  units?: string; // Opcional
}

const Legend: FC<LegendProps> = ({ colors, minLabel, maxLabel, title, units }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: '10px',
        borderRadius: '8px',
        zIndex: 1000,
        maxWidth: '200px',
      }}
    >
      <h4>{title}</h4>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <span>{minLabel}</span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '10px',
            marginRight: '10px',
          }}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: `#${color}`, // Los colores se pasan como hexadecimales
              }}
            ></div>
          ))}
        </div>
        <span>{maxLabel}</span>
      </div>
      {units && <p>{units}</p>}
    </div>
  );
};

export default Legend;
