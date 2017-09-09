const effectRanges = {
  compressor: {
    threshold: [-100, 0], // percentage * -100
    knee: [0, 40], // percentage * 40
    ratio: [1, 20], // percentage of 19 + 1
    attack: [0, 1], // percentage
    release: [0, 1], // percentage
    reduction: [-20, 0] // percentage * -20 READ ONLY
  }
};

export default effectRanges;
