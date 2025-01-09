export const slideUp = {
  initial: { opacity: 0, y: 100 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
  },
};

export const scaleAnimate = {
  initial: { scale: 0 },
  enter: {
    scale: 1,

    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
  },
};
