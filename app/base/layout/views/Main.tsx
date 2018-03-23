import React from 'react'
import Header from './Header'
import styles from './Main.css'
import { Switch, Route } from 'react-router-dom' 
import { Organization } from '~/app/org/'

interface Props {
  children?: any
}

export default function Main({ children }: Props) {

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.body}>
        <Switch>
          <Route exact path='/org' component={Organization}/>
        </Switch>
      </div>
    </div>
  )
}