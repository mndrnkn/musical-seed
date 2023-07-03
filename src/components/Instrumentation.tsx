import React, { FC, useContext } from 'react';
import { Instrument } from '@/data/types';
import GlobalContext, { State } from "@/app/GlobalContext";



type Props = {
  instruments: Instrument[] 
}
const Instrumentation: React.FC<Props> = ({instruments}) => {

  if(instruments.length === 0) {
    return null
  }

  return (
    <div className='intrumentation'>
      <h3>Instruments:</h3>
      <ol>
      {instruments.map((instrument) => <li key={instrument.name}>
       {instrument.name}
      </li>)}
      </ol>
    </div>
  );
}

export default Instrumentation;
