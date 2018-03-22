import * as React from 'react'
import * as styles from './OrgSelect.css'
import className from 'classnames'
import Icon from '../../icon/'
import { Popover } from 'antd'

interface OrgItemProps {
  name: string,
  isSelect?: boolean
}

const OrgItem = ({ name, isSelect }: OrgItemProps) => (
  <li
    className={className(
      styles.orgItem,
      isSelect ? styles.selectItem : '',
      'can-click'
    )}
  >
    <span>
      {
        isSelect
          ? (
            <Icon
              type='icon-tick-thin'
              className={styles.selectIcon}
            />
          )
          : ''
      }
    </span>
    <span>{name}</span>
  </li>
)

export default function OrgSelect({ children }) {

  return (
    <Popover
      trigger='click'
      placement='bottom'
      content={
        <div className={styles.orgSelect}>
          <ul>
            <OrgItem
              name='油车文化'
              isSelect
            />
            <OrgItem
              name='百度技术团队'
            />
          </ul>
          <div className={className(styles.addOrg, 'can-click')}>
            <Icon
              type="icon-plus"
              className={className(styles.selectIcon, styles.addIcon)}
            />
            <span>创建企业</span>
          </div>
        </div>
      }
    >
      {children}
    </Popover>
  )
}