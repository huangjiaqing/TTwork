import * as React from 'react'
import * as styles from './Scrum.css'

export default function ({ children }) {

  return (
    <div className={styles.scrum}>
      {children}
    </div>
  )
}