import * as React from 'react'
import * as styles from './Organization.css'
import className from 'classnames'
import { Link } from 'react-router-dom'
import { Icon } from '~/app/base/'

interface ProjProps {
  name?: string,
  stared?: boolean
}

export default class Organization extends React.Component {

  edit = () => {
    console.log('你点击我啦')
  }

  render() {

    return (
      <div className={styles.org}>
        <div className={styles.center}>
          <section>
            <h2>星标项目</h2>
            <div className={styles.projGroup}>
              {this.renderOrgItem({name: '立白悦协作', stared: true})}
              {this.renderOrgItem({name: '北控项目面板', stared: true})}
              {/* <this.renderOrgItem name="立白悦协作" stared/>
              <this.renderOrgItem name="北控项目面板" stared/> */}
            </div>
          </section>
          <section>
            <h2>企业项目</h2>
            <div className={styles.projGroup}>
              {this.renderOrgItem({name: '立白悦协作', stared: true})}
              {this.renderOrgItem({name: '北控项目面板', stared: true})}
              {this.renderOrgItem({name: '固定资产系统', stared: true})}
              {this.renderOrgItem({name: '黄嘉庆的项目', stared: true})}
              {this.renderOrgItem({name: '天明的项目', stared: true})}
              {this.renderOrgItem({name: '梁爽的项目', stared: true})}
              {/* <this.renderOrgItem name="立白悦协作" stared/>
              <this.renderOrgItem name="北控项目面板" stared/> */}
              {/* <this.renderOrgItem name="固定资产系统"/>
              <this.renderOrgItem name="黄嘉庆的项目"/>
              <this.renderOrgItem name="天明的项目"/>
              <this.renderOrgItem name="梁爽的项目"/> */}
            </div>
          </section>
          <section>
            <h2>项目回收站</h2>
            <div className={styles.projGroup}>
              {/* <this.renderOrgItem name="大招科技"/> */}
              {this.renderOrgItem({name: '大招科技', stared: true})}
            </div>
          </section>
        </div>
      </div>
    )
  }

  renderOrgItem({ name, stared }: ProjProps) {

    return (
      <Link to="/project" className={styles.projItem}>
        <div className={styles.projInfo}>
          <h2>{name}</h2>
          <div className={styles.action}>
            <Icon
              type="icon-pencil"
              className={className(styles.projIcon, styles.iconEdit)}
              onClick={this.edit}
            />
            <Icon type="icon-star" className={className(styles.projIcon, styles.iconStar, stared ? styles.stared : '')}/>
          </div>
        </div>
      </Link>
    )
  }
}