import Image from 'next/image'
import { instruments } from '@/data/instruments'
import InstrumentDetails from '@/components/InstrumentDetails'

export default function Instruments() {
  console.log(instruments)
  return (
    <main className='main'>
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
    </main>
  )
}
