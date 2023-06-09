"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Mainvisual } from './lp_components/mainvisual'
import { Result } from './lp_components/result'
import { About } from './lp_components/about'
import { Service } from './lp_components/service'
import { Info } from './lp_components/info'

export default function Home() {
  return (  
    <main>
      <Mainvisual />
      <Result />
      <div className={styles.wrap}></div>
      <About />
      <div className={styles.wrap}></div>
      <Service />
      <div className={styles.wrap}></div>
      <Info />
      <div className={styles.wrap}></div>
    </main>
  )
}
