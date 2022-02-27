import React, { useContext } from "react";
import "./Stats.css";
import { Menu } from "../../context/MenuContext";

export default function Stats() {
  const { totalTimeToPrepare, totalHealthScore, totalPrice } = useContext(Menu);
  return (
    <div className="container stats">
      <div className="row">
        <div className="col-12">
          <p>
            Tiempo de preparación (promedio en minutos): {totalTimeToPrepare()}
          </p>
        </div>
        <div className="col-12">
          <p>Healthscore: {totalHealthScore()}</p>
        </div>
        <div className="col-12">
          <p>Precio total: $ {totalPrice()}</p>
        </div>
      </div>
    </div>
  );
}
