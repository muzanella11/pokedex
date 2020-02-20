// eslint-disable-next-line no-unused-vars
import Head from './../components/layouts/head'
// eslint-disable-next-line no-unused-vars
import Header from './../components/layouts/header'
// eslint-disable-next-line no-unused-vars
import Footer from './../components/layouts/footer'

const LayoutMain = props => (
  <React.Fragment>
    <Head title="main layout"></Head>

    <Header>
      ini header
    </Header>

    <main>
      {props.content}
    </main>

    <Footer>
      ini footer
    </Footer>
  </React.Fragment>
)

export default LayoutMain
