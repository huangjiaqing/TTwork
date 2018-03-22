import React from 'react'
import ReactDOM from 'react-dom'
import { Layout } from './base/'
import { AppContainer } from 'react-hot-loader'

const App = () => (
  <AppContainer>
    <Layout />
  </AppContainer>
)

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}