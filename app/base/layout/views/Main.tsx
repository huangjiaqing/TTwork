import React from 'react'
import Header from './Header'
import styles from './Main.css'
import { Switch, Route } from 'react-router-dom' 
import { Organization } from '~/app/org/'
import { Project } from '~/app/project'

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
          <Route exact path='/project' component={Project}/>
        </Switch>
      </div>
    </div>
  )
}