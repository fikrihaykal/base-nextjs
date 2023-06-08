const markerVariants = {
  inBot: {
    height: "20px",
    opacity: 1,
    transition: {
      duration: 0.26,
      delay: 0.205,
      ease: "easeOut",
      opacity: { duration: 0 },
      // ease: [1.0, 0.02, 0.15, 0.84],
    },
    top: "14px",
  },
  inTop: {
    height: "20px",
    opacity: 1,
    transition: {
      duration: 0.26,
      delay: 0.205,
      ease: "easeOut",
      opacity: { duration: 0 },
      // ease: [1.0, 0.02, 0.15, 0.84],
    },
    top: "14px",
  },
  outTop: {
    height: "34px",
    opacity: 0,
    top: "14px",
    transition: {
      duration: 0.26,
      ease: [0.755, 0.08, 0.325, 0.96],
      opacity: { delay: 0.24, duration: 0 },
    },
  },
  outBot: {
    height: "34px",
    opacity: 0,
    top: "0px",
    transition: {
      duration: 0.26,
      ease: [0.755, 0.08, 0.325, 0.96],
      opacity: { delay: 0.24, duration: 0 },
    },
  },
  offTop: {
    height: "34px",
    opacity: 0,
    transition: { duration: 0.2 },
    top: "34px",
  },
  offBot: {
    height: "34px",
    opacity: 0,
    transition: { duration: 0.2 },
    top: "0px",
  },
};
