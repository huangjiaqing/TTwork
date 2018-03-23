import React from 'react'
import ReactDOM from 'react-dom'
import RoutesMap from './routes'
import { AppContainer } from 'react-hot-loader'


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>
    , document.getElementById('app')
  )
}

render(RoutesMap)

if (module.hot) {
  module.hot.accept(['./routes'], () => {
    const newRoutes = require('./routes').default
    render(newRoutes)
  })
}