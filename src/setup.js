import menuItem from "./packages/menu-item";
import menus from "./config/menus";

const setup = (s, img) => {
  return () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    menus.forEach(menu => {
      menuItem(s, {
        index: menu.index,
        icon: menu.icon,
        text: menu.text,
        class_name: ""
      });
    });
  };
};

export default setup;
