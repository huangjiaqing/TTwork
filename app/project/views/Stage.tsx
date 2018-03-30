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

export default class Stage extends React.Component<Props> {

  render() {
    const { stageName, isCreate, children } = this.props

    return (
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