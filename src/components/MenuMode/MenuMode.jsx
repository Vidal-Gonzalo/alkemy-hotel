import React, { useContext } from "react";
import { Menu } from "../../context/MenuContext";
import "./MenuMode.css";
import Stats from "../Stats/Stats";
import ItemList from "../ItemList/ItemList";
import NoItems from "../NoItems/NoItems";

export default function MenuMode() {
  const { menu } = useContext(Menu);

  return (
    <>
      <div className="menu">
        <h3>¡Bienvenido a Alkemy Hotel!</h3>
      </div>
      {menu.length > 0 ? (
        <>
          <h5>Tu menú cuenta con las siguientes estadísticas:</h5>
          <Stats />
          <ItemList items={menu} />
        </>
      ) : (
        <>
          <div className="menu-subtitle">
            <p>¡Dirígete al buscador para añadir comidas a tu menú!</p>
          </div>

          <NoItems />
        </>
      )}
    </>
  );
}
