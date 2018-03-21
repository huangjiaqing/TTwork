import React from 'react'
import ReactDOM from 'react-dom'
import styles from './app.css'

const Hello = () => {

  return (
    <div className={styles.hello}>hello</div>
  )
}

ReactDOM.render(<Hello />, document.getElementById('app'))
