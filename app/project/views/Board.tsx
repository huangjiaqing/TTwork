import * as React from 'react'
import * as styles from './Board.css'
import Scrum from './Scrum'
import Stage from './Stage'
import Task from './Task'

export default function () {

  return (
    <div className={styles.board}>
      <Scrum>
        <Stage stageName="待处理">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </Stage>
        <Stage stageName="进行中"/>
        <Stage stageName="测试中"/>
        {/* <Stage stageName="已测试"/>
        <Stage stageName="已通过"/>
        <Stage stageName="已完成"/> */}
        <Stage isCreate={true}/>
      </Scrum>
    </div>
  )
}