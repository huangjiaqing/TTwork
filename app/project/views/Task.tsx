import * as React from 'react'
import * as styles from './Task.css'
import { Avatar } from 'antd'
import { Icon } from '~/app/base'

class Draggable extends React.Component {

  onDragStart = e => {
    console.log('被拖拽的元素/开始拖拽：', e.target)
  }

  onDragEnter = e => {
    console.log('目标元素/被拖拽元素进入目标元素：', e.target)
  }

  onDragOver = e => {
    e.preventDefault()
    console.log('目标元素/被拖拽元素在目标元素上移动：', e.target)
  }

  onDrop = e => {
    console.log('目标元素/被拖拽的元素在目标元素上同时鼠标放开：', e.target)
  }

  onDragEnd = e => {
    console.log('被拖拽的元素/拖拽完成：', e.target)
  }

  render() {
    const { children } = this.props

    return (
      <div
        draggable
        onDragStart={this.onDragStart}
        // onDragEnter={this.onDragEnter}
        // onDragOver={this.onDragOver}
        // onDrop={this.onDrop}
        onDragEnd={this.onDragEnd}
      >
        {children}
      </div>
    )
  }
}

const Task = () => (
  <Draggable>
    <div className={styles.task}>
      <div className={styles.body}>
        <Icon type="icon-checkbox" />
        <section className={styles.taskInfo}>
          <h2 className={styles.content}>
            笔记需要归档到我的个人知识库，会有很多不错的选择。
          </h2>
        </section>
        <Avatar
          icon="user"
          size="small"
          src="https://i.loli.net/2018/03/25/5ab6f20c79726.jpg"
        />
      </div>
    </div>
  </Draggable>
)

export default Task