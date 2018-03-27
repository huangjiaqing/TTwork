import * as React from 'react'
import * as styles from './Project.css'
import Board from './Board'
import Header from './Header'

export default class Project extends React.Component {

  render() {
    return (
      <div className={styles.project}>
        <Header />
        <Board />
      </div>
    )
  }
}