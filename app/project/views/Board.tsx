import * as React from 'react'
import * as styles from './Board.css'
import Scrum from './Scrum'
import Stage from './Stage'

export default function () {

  return (
    <div className={styles.board}>
      <Scrum>
        <Stage stageName="待处理"/>
        <Stage stageName="进行中"/>
        <Stage stageName="测试中"/>
        <Stage stageName="已完成"/>
        <Stage isCreate={true}/>
      </Scrum>
    </div>
  )
}