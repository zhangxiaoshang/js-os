const MARGIN_LEFT = 15;
const MARGIN_RIGHT = 15;

const menuItem = (s, ops) => {
  let node;
  if (ops.icon) {
    node = s.createDiv(
      `<img src="${ops.icon}" style="width: 16px; height: 16px" />`
    );
  } else {
    node = s.createDiv(ops.text);
  }
  node.position(ops.index * 50, 0);
  let className = "topbar__menu-item";
  if (ops.class_name) {
    className = className + " " + ops.class_name;
  }
  node.class(className);

  node.mouseOver(mouseOverMenuItem(s, ops.index));
};

const mouseOverMenuItem = (s, index) => {
  const renderChildMenu = () => {
    console.log("rect");
  };

  return renderChildMenu;
};

export default menuItem;
