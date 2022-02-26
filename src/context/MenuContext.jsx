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
    toast.error("Asegúrate de que sean 2 elementos veganos y 2 no-veganos", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyDeleted = () =>
    toast.error("Elemento eliminado de tu menú", {
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
      //Condicionales para controlar la cantidad de platos veganos
      if (item.vegan === true && vegan < 2) {
        setVegan(vegan + 1);
        setMenu([...menu, item]);
        notifySuccess();
      } else if (item.vegan === true && vegan === 2) {
        notifyError();
      }
      //Condicionales para controlar la cantidad de platos no-veganos
      if (item.vegan === false && noVegan < 2) {
        setNoVegan(noVegan + 1);
        setMenu([...menu, item]);
        notifySuccess();
      } else if (item.vegan === false && noVegan === 2) {
        notifyError();
      }
    } else {
      notifyError();
    }
  };

  const removeItem = (item) => {
    try {
      let itemRemoved = menu.filter((element) => element.id !== item.id);
      if (item.vegan) {
        setVegan(vegan - 1);
      } else {
        setNoVegan(noVegan - 1);
      }
      itemRemoved.added = false;
      setMenu(itemRemoved);
      notifyDeleted();
    } catch (err) {
      console.log(err);
    }
  };

  const totalPrice = () => {
    return Math.ceil(menu.reduce((acc, prod) => acc + prod.price, 0));
  };

  const totalHealthScore = () => {
    return menu.reduce((acc, prod) => acc + prod.healthScore, 0);
  };

  const totalTimeToPrepare = () => {
    return menu.reduce(
      (acc, prod) => acc + prod.readyInMinutes / menu.length,
      0
    );
  };

  const clearMenu = () => {
    setMenu([]);
    setVegan(0);
    setNoVegan(0);
  };

  return (
    <Menu.Provider
      value={{
        menu,
        addItem,
        removeItem,
        totalPrice,
        totalHealthScore,
        totalTimeToPrepare,
        clearMenu,
      }}
    >
      {children}
    </Menu.Provider>
  );
};
