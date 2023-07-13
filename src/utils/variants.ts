const container = {
  initial: {
    transition: { staggerChildren: 1, delayChildren: 0.5 },
  },
  enter: {
    transition: { staggerChildren: 1, delayChildren: 0.5 },
  },
  exit: { transition: { staggerChildren: 1, delayChildren: 0.5 } },
};

const item = {
  initial: {
    x: -100,
    transition: { duration: 1.5 },
  },
  enter: { x: 0, transition: { duration: 1.5 } },
  exit: { x: 100, transition: { duration: 1.5 } },
};

export { container, item };
