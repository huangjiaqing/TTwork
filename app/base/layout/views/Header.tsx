import React, { Component } from 'react'
import className from 'classnames'
import Icon from '../../icon/'
import styles from './Header.css'
import OrgSelect from './OrgSelect'
import { Avatar } from 'antd'

export default class Header extends Component {

  render() {

    return (
      <header className={styles.header}>
        {this.renderOrg()}
        <section className={styles.search}>
        </section>
        <section className={styles.me}>
          <Avatar
            icon="user"
            src="https://i.loli.net/2018/03/25/5ab6f20c79726.jpg"
            size="small"
          />
        </section>
      </header>
    )
  }

  renderOrg() {

    return (
      <section className={styles.org}>
        <OrgSelect>
          <Icon
            type="icon-menu"
            className={className(styles.orgIcon, 'can-click')}
          />
        </OrgSelect>
        <h2>
          油车文化
        </h2>
      </section>
    )
  }
}