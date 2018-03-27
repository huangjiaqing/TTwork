import * as React from 'react'
import * as styles from './Stage.css'
import className from 'classnames'
import { Icon } from '~/app/base'

interface Props {
  stageName?: string,
  isCreate?: boolean
}

export default function ({ stageName, isCreate }: Props) {

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
        : (
          <div>
            <h2 className={styles.title}>{stageName} · 1</h2>
          </div>
        )
    }
  </div>
  )
}