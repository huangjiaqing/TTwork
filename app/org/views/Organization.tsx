import * as React from 'react'
import * as styles from './Organization.css'
import className from 'classnames'
import { Icon } from '~/app/base/'

interface ProjProps {
  name?: string,
  stared?: boolean
}

export default class Organization extends React.Component {

  render() {

    return (
      <div className={styles.org}>
        <div className={styles.center}>
          <section>
            <h2>星标项目</h2>
            <div className={styles.projGroup}>
              <this.renderOrgItem name="立白悦协作" stared/>
              <this.renderOrgItem name="北控项目面板" stared/>
            </div>
          </section>
          <section>
            <h2>企业项目</h2>
            <div className={styles.projGroup}>
              <this.renderOrgItem name="立白悦协作" stared/>
              <this.renderOrgItem name="北控项目面板" stared/>
              <this.renderOrgItem name="固定资产系统"/>
              <this.renderOrgItem name="黄嘉庆的项目"/>
              <this.renderOrgItem name="天明的项目"/>
              <this.renderOrgItem name="梁爽的项目"/>
            </div>
          </section>
          <section>
            <h2>项目回收站</h2>
            <div className={styles.projGroup}>
              <this.renderOrgItem name="大招科技"/>
            </div>
          </section>
        </div>
      </div>
    )
  }

  renderOrgItem({ name, stared }: ProjProps) {

    return (
      <div className={className(styles.projItem, 'can-click')}>
        <div className={styles.projInfo}>
          <h2>{name}</h2>
          <div className={styles.action}>
            <Icon type="icon-pencil" className={className(styles.projIcon, styles.iconEdit)}/>
            <Icon type="icon-star" className={className(styles.projIcon, styles.iconStar, stared ? styles.stared : '')}/>
          </div>
        </div>
      </div>
    )
  }
}