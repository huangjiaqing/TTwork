import React, { Component } from 'react'
import Icon from '../../icon/'
import Avatar from '../../avatar/'
import styles from './Header.css'

export default class Header extends Component {

  render() {

    return (
      <header className={styles.header}>
        {this.renderOrg()}
        <section className={styles.search}>
          {/* <input /> */}
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
        <Icon
          type="icon-menu"
          className={styles.orgIcon}
        />
        <h2>
          油车科技有限公司
        </h2>
      </section>
    )
  }
}