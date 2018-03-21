import React from 'react'
import Header from './Header'
import styles from './Main.css'

interface Props {
  children?: any
}

export default function Main({ children }: Props) {

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.body}>
        {children || ''}
      </div>
    </div>
  )
}