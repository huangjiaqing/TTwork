import * as React from 'react'
import * as styles from './Project.css'
import { Breadcrumb } from 'antd'
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
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>油车文化</Breadcrumb.Item>
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
}