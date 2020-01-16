import React from 'react'
import App from './index'
import { appWithTranslation } from '../i18n'

class MyApp extends React.Component {
  render() {
    return (
      <div>
        <App></App>
      </div>
    )
  }
}

export default appWithTranslation(MyApp)