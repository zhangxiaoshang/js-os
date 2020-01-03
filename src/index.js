import p5 from "p5";
import preload from "./preload";
import setup from "./setup";
import topbar from "./packages/topbar";
import docker from "./packages/docker";
import topbarRight from "./packages/topbar-right";

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
};

new p5(sketch);
