import * as React from 'react'
import * as styles from './SelectProj.css'
import className from 'classnames'
import { Popover } from 'antd'
import { Icon } from '~/app/base'

export default function ({ children }) {

  return (
    <Popover
      content="你好"
      placement="bottom"
      trigger="click"
    >
      <div className={className(styles.optBtn, 'can-click')}>
        <span>{children}</span>
        <Icon
          type="icon-chevron-down"
          className={styles.optBtnIcon}
        />
      </div>
    </Popover>
  )
}