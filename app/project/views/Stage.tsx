import * as React from 'react'
import * as styles from './Stage.css'
import Task from './Task'
import className from 'classnames'
import { Icon } from '~/app/base'

interface Props {
  stageName?: string,
  isCreate?: boolean,
  children?: Task
}

const onDragEnter = e => {
  console.log('目标元素/被拖拽元素进入目标元素：', e.target)
  return true
}

function Stage({ stageName, isCreate, children }: Props) {

  return (
    <div className={className(styles.stage, isCreate ? styles.create : '')} onDragEnter={onDragEnter}>
    {
      isCreate
        ? (
          <div className={className(styles.createStage, 'can-click')}>
            <Icon type="icon-plus" className={styles.createIcon}/>
            <span>新建任务列表 ...</span>
          </div>
        )
        : [
          <h2 className={styles.title} key="title">{stageName} · 1</h2>,
          <div className={styles.tasks} key="list">
            <div className={styles.list}>
              {children}
            </div>
            <div className={styles.addTask} key="add">
            
            </div>
          </div>
        ]
    }
  </div>
  )
}

export default Stage