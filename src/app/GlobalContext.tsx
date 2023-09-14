import React from 'react';
import { Instrument, MusicalParameters } from '@/data/types';


export type  State = {
  ease: number
  numberInstruments: number
  heavyRotation: number
  conventionality: number
  acceptableVolume: number
  isElectric: boolean
  isAcoustic: boolean
  isDigital: boolean
  isRhythmTrack: boolean
  hasAlternateTuning: boolean
  timeDate: Date
  showConfig: boolean
  showInstruments: boolean
  priority: number,
  instrumentation: Instrument[],
  musicalParameters: MusicalParameters | null
  showInstrumentation: boolean,

}

export const initialState: State = {
  ease: 1,
  numberInstruments: 2,
  heavyRotation: 1.5,
  conventionality: 2,
  acceptableVolume: 2,
  isElectric: true,
  isAcoustic: true,
  isDigital: false,
  isRhythmTrack: Math.random() < 0.5,
  timeDate: new Date(),
  showConfig: false,
  showInstruments: false,
  hasAlternateTuning: false, 
  instrumentation: [],
  priority: 2,
  musicalParameters: null,
  showInstrumentation: false, 
};

const GlobalContext = React.createContext<{
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}>({
  state: initialState,
  setState: () => null,
});

export default GlobalContext;