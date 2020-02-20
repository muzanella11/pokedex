/* eslint-disable */
import Head from '../components/layouts/head'
import Footer from '../components/layouts/footer'
/* eslint-enable */

const LayoutBlank = props => (
  <React.Fragment>
    <Head title="main layout"></Head>

    <main>
      {props.content}
    </main>

    <Footer>
      Pokedex | Nurfirliana Muzanella
    </Footer>
  </React.Fragment>
)

export default LayoutBlank
