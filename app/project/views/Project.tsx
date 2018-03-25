import * as React from 'react'
import * as styles from './Project.css'
import className from 'classnames'
import { Breadcrumb,Popover } from 'antd'
import { Icon } from '~/app/base'

export default class Project extends React.Component {

  render() {
    return (
      <div className={styles.project}>
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    )
  }

  renderHeader() {
    return (
      <div className={styles.header}>
        <section className={styles.nav}>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>
              {this.renderProjectOpt('立白悦协作')}
            </Breadcrumb.Item>
          </Breadcrumb>
        </section>
        <section className={styles.action}>
          <li className="can-click">
            <Icon type="icon-activities-trend" className={styles.actionIcon}/>
            <span>菜单</span>
          </li>
        </section>
      </div>
    )
  }

  renderBody() {
    return (
      <div className={styles.body}>
        {/* 这是body */}
      </div>
    )
  }

  renderProjectOpt(chilren) {
    return (
      <Popover
        content="你好"
        placement="bottom"
        trigger="click"
      >
        <div className={className(styles.optBtn, 'can-click')}>
          <span>{chilren}</span>
          <Icon
            type="icon-chevron-down"
            className={styles.optBtnIcon}
          />
        </div>
      </Popover>
    )
  }
}