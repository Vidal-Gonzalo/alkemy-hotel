import Axios from "axios";

const Menu = {
  getMenu: async () => {
    return await Axios.get("https://api.spoonacular.com/food/menuItems/search");
  },
};

export default Menu;
