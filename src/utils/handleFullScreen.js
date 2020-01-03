const handleFullScreen = function() {
  const element = document.documentElement;

  const requestFullscreen =
    element.requestFullscreen ||
    element.webkitRequestFullScreen ||
    element.mozRequestFullScreen ||
    element.msRequestFullscreen;

  requestFullscreen.call(element);
};

export default handleFullScreen;
