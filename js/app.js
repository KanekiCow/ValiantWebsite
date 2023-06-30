particlesJS("particles-js", {
  particles: {
    number: {
      value: 20,
    },
    color: {
      value: ["#870228", "#510287"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 10,
      random: true,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "top",
      random: true,
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
    },
  },
});
