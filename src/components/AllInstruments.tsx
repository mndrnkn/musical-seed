import React from "react";
import { Instrument } from "@/data/types";
import Image from "next/image";
import { instruments } from '@/data/instruments'
import InstrumentDetails from '@/components/InstrumentDetails'

type Props = {
    instrument: Instrument
}

const AllInstruments: React.FC<Props> = ({instrument}) => {

return (
    <div>
        <h1>INSTRUMENTS</h1>
       <h2>Basses</h2>
       {instruments.bass.map((item) => <InstrumentDetails instrument={item} key={item.name}/>)}
       <h2>Guitars</h2>
       {instruments.guitar.map((item) => <InstrumentDetails instrument={item} key={item.name}/>)}
       <h2>Keyboards</h2>
       {instruments.keyboard.map((item) => <InstrumentDetails instrument={item} key={item.name}/>)}
       <h2>Rhythm</h2>
       {instruments.rhythm.map((item) => <InstrumentDetails instrument={item} key={item.name}/>)}
       <h2>Other</h2>
       {instruments.other.map((item) => <InstrumentDetails instrument={item} key={item.name}/>)}
    </div>
)

}

export default AllInstruments