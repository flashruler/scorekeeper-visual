import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
<div className="flex flex-col w-screen h-screen bg-black">
<div className="bg-gradient-to-r from-orange-red to-sky-blue via-neutral-gray w-2/4 inset-x-0 top-0 h-12 self-center rounded-br-lg rounded-bl-lg ">
<div className="grid grid-cols-3 justify-center">
  <div className="flex flex-row justify-center">
    <h1>Test</h1>
  </div>
  </div>
  </div>
 </div>
  )
}
