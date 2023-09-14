import React, { FC, useContext } from 'react';
import { Instrument } from '@/data/types';
import GlobalContext, { State } from "@/app/GlobalContext";
import Image from 'next/image';



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
      {instruments.map((instrument: Instrument) => <li key={instrument.name}>
        <>
        <Image src="/instruments/placeholder.jpg" width={250} height={125}  alt={instrument.name}/>
       <label>{instrument.name}</label>
       </>
      </li>)}
      </ol>
      <style jsx>{`
        ol li {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        label {
          font-weight: 700;
        }
      `
      }
      </style>
    </div>
  );
}

export default Instrumentation;
