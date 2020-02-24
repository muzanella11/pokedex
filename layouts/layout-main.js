/* eslint-disable */
import Head from './../components/layouts/head'
import Header from './../components/layouts/header'
import Footer from './../components/layouts/footer'
/* eslint-enable */

const LayoutMain = props => (
  <React.Fragment>
    <Head title="main layout"></Head>

    <Header>
      ini header
    </Header>

    <main>
      {props.children}
    </main>

    <Footer>
      Pokedex | Nurfirliana Muzanella
    </Footer>
  </React.Fragment>
)

export default LayoutMain
