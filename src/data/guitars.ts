import { InstrumentCategory } from "./types";

export const guitars: InstrumentCategory = [
  {
    name: "Martin - D16GT",
    setUpEase: 1,
    priority: 1,
    volume: 2,
    type: "acoustic",
  },
  {
    name: "Martin - D15",
    setUpEase: 1,
    priority: 2,
    volume: 2,
    type: "acoustic-electric",
    alternateTuning: true
  },

  {
    name: "Fender Stratocaster",
    setUpEase: 2,
    priority: 2,
    volume: 1,
    type: "electric",
    alternateTuning: true

  },
  {
    name: "Fender Telecaster",
    setUpEase: 2,
    priority: 2,
    volume: 1,
    type: "electric",
  },
];



export const guitarAlternateTunings: {name: string, tuning: string}[]  = [
  {
    name: 'Drop D',
    tuning: 'D A D G B E'
  },
  {
    name: 'Double Drop D',
    tuning: 'D A D G B D'
  },
  {
    name: 'DADGAD',
    tuning: 'D A D G A D'
  },
  {
    name: 'Open D',
    tuning: 'D A D F# A D'
  },
  {
    name: 'Open G',
    tuning: 'D G D G B D'
  },
  {
    name: 'Open E',
    tuning: 'E B E G# B E'
  },
  {
    name: 'Open C',
    tuning: 'C G C G C E'
  },
  {
    name: 'D Standard',
    tuning: 'D G C F A D'
  },
  {
    name: 'C Standard',
    tuning: 'C F Bb Eb G C'
  },
  {
    name: 'Half Step Down',
    tuning: 'Eb Ab Db Gb Bb Eb'
  }
];

