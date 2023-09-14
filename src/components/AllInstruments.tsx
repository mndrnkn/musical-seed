import React, {useContext, useCallback} from "react";
import { Instrument } from "@/data/types";
import Image from "next/image";
import { instruments } from '@/data/instruments'
import InstrumentDetails from '@/components/InstrumentDetails'
import GlobalContext, { State } from "@/app/GlobalContext";



const AllInstruments: React.FC = () => {
    const { state, setState } = useContext(GlobalContext);

    const setShowInstruments = useCallback(() => {
        setState((prevState) => ({...prevState, showInstruments: !state.showInstruments}))
    }, [setState, state.showInstruments])

return (
    <>
    <button onClick={setShowInstruments}>{state.showInstruments ? 'hide' : 'show'} instruments</button>
    {state.showInstruments && <div>
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
    </div>}
   

    </>
)

}

export default AllInstruments