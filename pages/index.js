/* eslint-disable */
import LayoutBlank from './../layouts/layout-blank'
/* eslint-enable */

const HomePage = (
  <React.Fragment>
    <div class="l-homepage">
      <h3 class="title">
        Pokedex
      </h3>
      <div class="stage">
        <a href="/pokemon" class="poke bounce"></a>
      </div>
      <div class="homepage__wording-action">
        <p class="description">
          Catch pokeball to see
        </p>
      </div>
    </div>
  </React.Fragment>
)

const PageResult = () => (
  <LayoutBlank content={HomePage}></LayoutBlank>
)

export default PageResult
