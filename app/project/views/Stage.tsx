import * as React from 'react'
import * as styles from './Stage.css'
import Task from './Task'
import className from 'classnames'
import { Icon } from '~/app/base'

import { DropTarget } from 'react-dnd';

const TASK = 'task'

const stageTarget = {
  drop(props, monitor) {
    console.log('移动到这里啦/props:', props)
    console.log('移动到这里啦/monitor：', monitor)
    props.changeStage()
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

interface Props {
  stageName?: string,
  isCreate?: boolean,
  children?: Task,
  connectDropTarget?: any,
  [props: string]: any
}

class Stage extends React.Component<Props, any> {

  render() {
    const {
      stageName,
      isCreate,
      children,
      connectDropTarget,
    } = this.props

    return connectDropTarget(
      <div className={className(styles.stage, isCreate ? styles.create : '')}>
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
            <div
              className={styles.tasks}
              key="list"
            >
              <div className={styles.list} ref="taskList">
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
}

export default DropTarget(TASK, stageTarget, collect)(Stage)