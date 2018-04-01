import * as React from 'react'
import * as styles from './Task.css'
import { Avatar } from 'antd'
import { Icon } from '~/app/base'

import { DragSource } from 'react-dnd';

const TASK = 'task'

const taskSource = {
  beginDrag(props) {
    return {}
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function Task(props) {
  const { content, connectDragSource } = props

  return connectDragSource(

    <div className={styles.task}>
      <div className={styles.body}>
        <Icon type="icon-checkbox" />
        <section className={styles.taskInfo}>
          <h2 className={styles.content}>
            {content}
          </h2>
        </section>
        <Avatar
          icon="user"
          size="small"
          src="https://i.loli.net/2018/03/25/5ab6f20c79726.jpg"
        />
      </div>
    </div>
  )
}

export default DragSource(TASK, taskSource, collect)(Task)