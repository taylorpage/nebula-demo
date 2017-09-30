export const genreCompressors = {
  hiphop: [-10, 20, 5, .3, .0],
  indy: [-0, 35, 3, .7, .0],
  country: [-10, 30, 3, .6, .3],
  rock: [-35, 25, 12, .6, .4]
};

export const genreEqs = {
  hiphop: [36, 50, -13, -7, -5, 25],
  indy: [36, 29, 19, 15, 30, 20],
  country: [33, 47, 17, 0, -23, -33],
  rock: [30, 25, -4, -7, 22, 32]
};

export const presets = {
  custom: {
    rangeOne: 0,
    rangeTwo: 0,
    rangeThree: 0,
    eqOne: 0,
    eqTwo: 0,
    eqThree: 0,
    eqFour: 0,
    eqFive: 0,
    eqSix: 0
  },
  jazz: {
    rangeOne: 10,
    rangeTwo: 60,
    rangeThree: 0,
    eqOne: 20,
    eqTwo: 30,
    eqThree: 40,
    eqFour: 20,
    eqFive: 70,
    eqSix: 50
  },
  acoustic: {
    rangeOne: 30,
    rangeTwo: 70,
    rangeThree: 10,
    eqOne: 40,
    eqTwo: 30,
    eqThree: 50,
    eqFour: 60,
    eqFive: 50,
    eqSix: 60
  },
  hiphop: {
    rangeOne: 70,
    rangeTwo: 40,
    rangeThree: 20,
    eqOne: 50,
    eqTwo: 60,
    eqThree: 40,
    eqFour: 30,
    eqFive: 50,
    eqSix: 60
  },
  electronic: {
    rangeOne: 80,
    rangeTwo: 20,
    rangeThree: 50,
    eqOne: 60,
    eqTwo: 70,
    eqThree: 60,
    eqFour: 30,
    eqFive: 40,
    eqSix: 60
  }
};

