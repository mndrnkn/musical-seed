import React, {useContext, useCallback} from "react";
import { instruments } from '@/data/instruments'
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
       <ul>{instruments.bass.map((item) => <li key={item.name}>{item.name}</li>)}</ul>
       <h2>Guitars</h2>
       <ul>{instruments.guitar.map((item) => <li key={item.name}>{item.name}</li>)}</ul>
       <h2>Keyboards</h2>
       <ul>{instruments.keyboard.map((item) => <li key={item.name}>{item.name}</li>)}</ul>
       <h2>Rhythm</h2>
       <ul>{instruments.rhythm.map((item) => <li key={item.name}>{item.name}</li>)}</ul>
       <h2>Other</h2>
       <ul>{instruments.other.map((item) => <li key={item.name}>{item.name}</li>)}</ul>
    </div>}
   <style jsx>{`ul { margin-bottom: 40px;}`}</style>

    </>
)

}

export default AllInstruments