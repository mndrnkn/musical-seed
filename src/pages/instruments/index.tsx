import Image from 'next/image'
import styles from './index.module.css'
import { instruments as data, instruments } from '@/data/instruments'

export default function Instruments() {
  return (
    <main className={styles.main}>
      <h1>INSTRUMENTS</h1>
      <h2>Basses</h2>
      <h3>Electric</h3>
      <h3>Acoustic</h3>
      
    </main>
  )
}
