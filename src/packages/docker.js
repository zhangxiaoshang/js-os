const docker = (s, img) => {
  s.noStroke();
  s.fill(118, 124, 126, 200);
  s.rect(738, s.windowHeight - 88, 300, 88, 6, 6, 0, 0);

  s.image(img.vscode, 760, s.windowHeight - 75, 64, 64);
  s.image(img.chrome, 850, s.windowHeight - 75, 64, 64);
  s.image(img.wechat, 950, s.windowHeight - 75, 64, 64);
};

export default docker;
