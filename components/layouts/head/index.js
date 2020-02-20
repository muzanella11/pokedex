import { Component } from 'react'
/* eslint-disable */
import NextHead from 'next/head'
/* eslint-enable */
import './../../../assets/scss/main.scss'

class HeadElement extends Component {
  componentDidMount () {
    const { bodyClass } = this.props
    document.querySelector('body').classList.add(bodyClass || 'enem-themes')
  }

  render () {
    return (
      <NextHead>
        <title>{ this.props.title }</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        { this.props.headContent }
      </NextHead>
    )
  }
}

export default HeadElement
