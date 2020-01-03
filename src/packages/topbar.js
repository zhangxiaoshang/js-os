import menuItem from "./menu-item";

const TOPBAR_HEIGHT = 23;
const topbar = (s, img) => {
  s.noStroke();
  s.fill(118, 124, 126, 200);
  s.rect(0, 0, s.windowWidth, TOPBAR_HEIGHT);

  // s.image(img.apple, 18, 4, 16, 16);

  // s.textAlign(s.LEFT, s.BASELINE);
  // s.fill(255);
  // s.textSize(12);
  //   menuItem(s);
  //   s.text("访达", 50, 16);
  // s.text("文件", 100, 16);
  // s.text("编辑", 145, 16);
  // s.text("显示", 192, 16);
  // s.text("前往", 240, 16);
  // s.text("窗口", 288, 16);
  // s.text("帮助", 336, 16);

  // s.image(img.menu, s.windowWidth - 40, 6, 20, 12);
  // s.image(img.search, s.windowWidth - 40 - 36, 3, 16, 16);

  // s.textAlign(s.RIGHT, s.BASELINE);

  // s.text(
  //   `${s.month()}月${s.day()}日 ${s.hour()}:${s.minute()}:${s.second()}`,
  //   s.windowWidth - 100,
  //   16
  // );
};

export default topbar;
