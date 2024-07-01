const menuSlide = {
  initial: {
    y: '100%',
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

const slide = {
  initial: {
    y: '100%',
  },
  enter: () => ({
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  }),
  exit: () => ({
    y: '100%',
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  }),
};

const slideBg = {
  initial: {
    y: '100%',
  },
  enter: {
    y: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: '100%',
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};

const slideScanner = {
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

const advanceSlide = {
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

const slideBtn = {
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

export { menuSlide, slide, slideBg, slideScanner, advanceSlide, slideBtn };
