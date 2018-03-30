import * as React from 'react'
import * as styles from './Task.css'
import { Avatar } from 'antd'
import { Icon } from '~/app/base'

const Task = () => (
  
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
)

export default Task