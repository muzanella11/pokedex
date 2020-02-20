// eslint-disable-next-line no-unused-vars
import NextHead from 'next/head'

const Head = props => {
  return (
    <NextHead>
      <title>{ props.title }</title>
      <link rel="icon" href="/favicon.ico" />
      {props.headContent}
    </NextHead>
  )
}

export default Head
