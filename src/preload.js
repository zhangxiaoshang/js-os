import img_apple from "./images/apple.png";
import img_girl from "./images/girl.jpg";
import img_search from "./images/search.png";
import img_menu from "./images/menu.png";
import wechat from "./images/wechat.png";
import chrome from "./images/chrome.png";
import vscode from "./images/vscode.png";

const preload = (s, img) => {
  return () => {
    img.apple = s.loadImage(img_apple);
    img.girl = s.loadImage(img_girl);
    img.search = s.loadImage(img_search);
    img.menu = s.loadImage(img_menu);
    img.wechat = s.loadImage(wechat);
    img.chrome = s.loadImage(chrome);
    img.vscode = s.loadImage(vscode);
  };
};

export default preload;
