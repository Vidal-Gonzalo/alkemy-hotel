import React, { useContext, useEffect, useState } from "react";
import "./Stats.css";
import { Menu } from "../../context/MenuContext";

export default function Stats() {
  const { totalTimeToPrepare, totalHealthScore, totalPrice } = useContext(Menu);
  return (
    <div className="stats">
      <p>Tiempo de preparación (promedio en minutos): {totalTimeToPrepare()}</p>
      <p>Healthscore: {totalHealthScore()}</p>
      <p>Precio total: $ {totalPrice()}</p>
    </div>
  );
}
