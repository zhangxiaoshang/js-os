const topbarRight = (s, img) => {
  s.image(img.menu, s.windowWidth - 40, 6, 20, 12);
  s.image(img.search, s.windowWidth - 40 - 36, 3, 16, 16);
  s.textAlign(s.RIGHT, s.BASELINE);

  s.fill(255);
  s.text(
    `${s.month()}月${s.day()}日 ${s.hour()}:${s.minute()}:${s.second()}`,
    s.windowWidth - 100,
    16
  );
};

export default topbarRight;
