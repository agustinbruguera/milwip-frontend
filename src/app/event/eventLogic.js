'use client';
import React, { useState } from 'react';

export default function EventLogic() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([
    { id: 1, text: "Encender el equipo, presionar tecla de encendido (ENTER)", image:'/images/1.jpg' },
    { id: 2, text: "Presionar las teclas FN + S + FN + T", image:'/images/2.jpg'},
    { id: 3, text: "En la venta siguiente indicar legajo y clave del operario que trabajará con la TRF. Una vez indicados los datos anteriores presionar CONFIRMAR(Conf), para ello\n debera bajar con las flechas hacia esa opción luego apretar ENTER", image:'/images/3.png' },
    // Agrega los objetos restantes aquí
  ]);

  const handlePrevious = () => {
    console.log(currentIndex);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    console.log(currentIndex);
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <h1>Implantación TRF - CDL</h1>
      <p>{data[currentIndex].text}</p>
      <img src={data[currentIndex].image} alt="Imagen" />
      <button onClick={handlePrevious}>Anterior</button>
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
}
