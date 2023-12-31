"use client";
import Main from '@/components/Main'
import GlobalContextProvider from './GlobalContextProvider';
import Configuration from'@/components/Configuration';




export default function Home() {
  return (
    <GlobalContextProvider>
    <main className='main'>
      <Main />
      <style jsx>{`
       .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 32px;
        width: 400px;
        max-width: 100%;
        gap: 32px;
       }
      `}</style>
    </main>
    </GlobalContextProvider>
  )
}
