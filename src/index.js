import p5 from "p5";
import preload from "./preload";
import setup from "./setup";
import topbar from "./packages/topbar";
import docker from "./packages/docker";
import topbarRight from "./packages/topbar-right";
import handleFullScreen from "./utils/handleFullScreen";

handleFullScreen();

const IMG = {};

const sketch = s => {
  s.preload = preload(s, IMG);

  s.setup = setup(s, IMG);

  s.draw = () => {
    s.background(IMG.girl);
    topbar(s, IMG);
    topbarRight(s, IMG);
    docker(s, IMG);
  };

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, s.windowHeight);
  };
};

new p5(sketch);
