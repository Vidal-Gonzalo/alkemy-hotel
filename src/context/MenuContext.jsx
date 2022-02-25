import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Menu = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [vegan, setVegan] = useState(0);
  const [noVegan, setNoVegan] = useState(0);

  const notifySuccess = () =>
    toast.success("¡Elemento agregado a tu menú!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyError = () =>
    toast.error("¡Ya existen 4 ítems en tu menú!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyMissingVariety = () =>
    toast.error("¡Asegúrate de que sean 2 comidas veganas y 2 no-veganas!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyExcessiveVegan = () =>
    toast.error("¡Ya existen 2 ítems veganos en tu menú!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const addItem = (item) => {
    if (menu.length < 4) {
      if (item.vegan === true && vegan < 2) {
        setVegan(vegan + 1);
        setMenu([...menu, item]);
      } else {
      }
    }
  };

  const removeItem = (item) => {
    let itemRemoved = menu.filter((element) => element.id !== item.id);
    if (item.vegan) {
      setVegan(vegan - 1);
    }
    setMenu(itemRemoved);
  };

  const clearMenu = () => {
    setMenu([]);
  };

  return (
    <Menu.Provider
      value={{
        menu,
        addItem,
        vegan,
        removeItem,
        clearMenu,
      }}
    >
      {children}
    </Menu.Provider>
  );
};
