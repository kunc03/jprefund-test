export const menuSlide = {
  initial: {
    y: '200%',
  },
  enter: {
    y: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: '100%',
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: {
    y: '200%',
  },
  enter: (i) => ({
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 2] },
  }),
  exit: (i) => ({
    y: '100%',
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 2] },
  }),
};

export const slideBg = {
  initial: {
    y: '300%',
  },
  enter: {
    y: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: '300%',
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slideScanner = {
  initial: {
    y: '180%',
  },
  enter: {
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: '100%',
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slidePrepare = {
  initial: {
    y: '-700%',
    blur: 90,
  },
  enter: {
    y: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: '-700%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const advanceSlide = {
  initial: {
    y: '200%',
  },
  enter: {
    y: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: '200%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slideBtn = {
  initial: {
    x: '100%',
  },
  enter: {
    x: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};
