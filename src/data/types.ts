type Level = 1 | 2 | 3;

// Instruments

export type Instrument = {
  name: string;
  setUpEase: Level;
  priority: Level;
  image?: string;
  alternateTuning?:boolean
  volume: Level;
  type: 'acoustic' | 'electric' | 'digital' | 'acoustic-electric'
  key?: KeySignature
};

export type InstrumentCategory = Instrument[]


export type Instruments = {
  bass: InstrumentCategory;
  keyboard:InstrumentCategory;
  guitar: InstrumentCategory;
  rhythm: InstrumentCategory;
  other: InstrumentCategory;
}

// Keys, modes and scales



export type KeySignature = `${"A" | "B" | "C" | "D" | "E" | "F" | "G"}${"#" | ''}`;

export type TonalFramework = {
    name: string;
    frequency: Level;
  };

  export type HarmonicFramework = {
    tonalFramework: TonalFramework
    keySignature: KeySignature
  } | string

export type  TonalSet = TonalFramework[]

export type TimeSignature = {
  beatCount: 2 | 3 | 4 | 5 | 6 | 7 | 9 | 12
  beatUnit: 2 | 3 | 4 | 8
  frequency: Level
}

export type RhythmType = { 
  tempo: number
  timeSignature: TimeSignature
} | string

export type MusicalParameters = {
  harmonic: HarmonicFramework
  rhythm: RhythmType
}



const modes: TonalFramework[] = [
  {
    name: 'ionian',
    frequency: 1, 
  },
  {
    name: 'dorian',
    frequency: 2, 
  },
  {
    name: 'phrygian',
    frequency: 2, 
  },
  {
    name: 'lydian',
    frequency: 2, 
  },
  {
    name: 'mixolydian',
    frequency: 1, 
  },
  {
    name: 'aeolian',
    frequency: 1, 
  },
  {
    name: 'locrian',
    frequency: 3, 
  },
]

const scales: TonalFramework[] = [
  {
    name: 'pentatonic',
    frequency: 1,  
  },
  {
    name: 'blues',
    frequency: 1,  
  },
  {
    name: 'whole tone',
    frequency: 3,  
  },
  {
    name: 'augmented',
    frequency: 3,  
  },
  {
    name: 'diminished',
    frequency: 3,  
  },
  {
    name: 'harmonic major',
    frequency: 3,  
  },
  {
    name: 'harmonic minor',
    frequency: 3,  
  },
  {
    name: 'medolic minor',
    frequency: 2,  
  },
]


export const tonalSet: TonalFramework[] = [...modes, ...scales]

export const timeSignatures: TimeSignature[] = [
  {
    beatCount: 4,
    beatUnit: 4,
    frequency: 1
  },
  {
    beatCount: 5,
    beatUnit: 4,
    frequency: 2
  },
  {
    beatCount: 7,
    beatUnit: 8,
    frequency: 2
  },
  {
    beatCount: 9,
    beatUnit: 8,
    frequency: 3
  },
  {
    beatCount: 6,
    beatUnit: 8,
    frequency: 2
  },
  {
    beatCount: 12,
    beatUnit: 8,
    frequency: 2
  },
  {
    beatCount: 3,
    beatUnit: 4,
    frequency: 2
  },
  {
    beatCount: 3,
    beatUnit: 8,
    frequency: 3
  },
  {
    beatCount: 7,
    beatUnit: 4,
    frequency: 3
  },
]

export const notes: KeySignature[] = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];











