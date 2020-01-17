import React from 'react'
import { appWithTranslation } from '../i18n'
import '~/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])

library.add(...iconList)

class MyApp extends React.Component {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Component {...pageProps}></Component>
      </div>
    )
  }
}

export default appWithTranslation(MyApp)