import { InstrumentCategory } from "./types";


export const keyboards: InstrumentCategory = [
        {
            name: 'Melodica',
            setUpEase: 1,
            priority: 3,
            volume: 2,
            type: 'acoustic'
        },
        {
            name: 'Casio Privia',
            setUpEase: 1,
            priority: 1,
            volume: 1, 
            type: 'priority'
        },
        {
            name: 'MIDI keyboard',
            setUpEase: 3,
            priority: 3,
            volume: 1,
            type: 'digital'
        },  
    ]
