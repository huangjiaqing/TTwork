import React from 'react'
import ReactDOM from 'react-dom'
import styles from './app.css'

const Hello = () => {

  return (
    <div className={styles.hello}>你好哦</div>
  )
}

ReactDOM.render(<Hello />, document.getElementById('app'))
