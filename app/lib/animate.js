export const splitText = {
  initial: {
    y: '100%',
  },
  enter: {
    y: '0%',
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
  },
};

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

export const scale3D = {
  initial: {
    opacity: 0,
    transform: 'translate3d(0, 5rem, 0) scale3d(0.7, 1.2, 1.2)',
  },
  enter: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
    transition: { duration: 0.5, ease: [0.5, 0, 0.75, 0] },
  },
};
