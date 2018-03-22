import React, { Component } from 'react'
import className from 'classnames'
import Icon from '../../icon/'
import Avatar from '../../avatar/'
import styles from './Header.css'
import OrgSelect from './OrgSelect'
import { Popover } from 'antd'

export default class Header extends Component {

  render() {

    return (
      <header className={styles.header}>
        {this.renderOrg()}
        <section className={styles.search}>
        </section>
        <section className={styles.me}>
          <Avatar />
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