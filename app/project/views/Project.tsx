import * as React from 'react'
import * as styles from './Project.css'
import className from 'classnames'
import { Breadcrumb,Popover } from 'antd'
import { Link } from 'react-router-dom'
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
            <Breadcrumb.Item><Link to="/org">首页</Link></Breadcrumb.Item>
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
        <div className={styles.scrum}>
          {this.renderStage({ stageName: '待处理' })}
          {this.renderStage({ stageName: '进行中' })}
          {this.renderStage({ stageName: '测试中' })}
          {this.renderStage({ stageName: '已完成' })}
          {this.renderStage({ isCreate: true })}
        </div>
      </div>
    )
  }

  renderStage({ stageName, isCreate }:{ stageName?: string, isCreate?: boolean }) {
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

  renderProjectOpt(chilren: string) {
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