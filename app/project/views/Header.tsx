import * as React from 'react'
import * as styles from './Header.css'
import SelectProj from './SelectProj'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { Icon } from '~/app/base'

export default function () {

  return (
    <div className={styles.header}>
      <section className={styles.nav}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/org">首页</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <SelectProj>
              立白悦协作
            </SelectProj>
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