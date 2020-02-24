import { useState, Component } from 'react'
/* eslint-disable */
import LayoutBlank from './../../layouts/layout-blank'
import {
  Button
} from 'react-bootstrap'
/* eslint-enable */
import QueryString from 'query-string'
import api from './../../api'

// eslint-disable-next-line no-unused-vars
class Template extends Component {
  constructor (props) {
    super(props)
    this.state = {
      entry: this.props.parentData.entry || {},
      entries: this.props.parentData.entries || [],
      isLoading: this.props.parentData.isLoading || false
    }

    this.setState({ ...this.state })
  }

  componentDidMount () {
    setTimeout(() => {
      this.state = {
        entry: this.props.parentData.entry || {},
        entries: this.props.parentData.entries || [],
        isLoading: this.props.parentData.isLoading || false
      }

      this.setState({ ...this.state })
    }, 1000)
  }

  mapTest (entries) {
    console.info('sss : ', entries)
    // return entries.map((item, index) => {
    //   return <li key={index}>{item}</li>
    // })
  }

  setEntryValue (key, value) {
    this.state.entry[key] = value

    this.setState({ ...this.state })
  }

  setKeyword (event) {
    const value = event.target.value

    this.setEntryValue('keyword', value)
  }

  render () {
    return (
      <React.Fragment>
        <div className="l-pokemon">
          <div className="pokemon__container container">
            <section className="pokemon__section discover-pokemon">
              <div className="brand">
                <div className="poke"></div>
                <h3 className="title">
                  Pokedex
                </h3>
              </div>
  
              <pre>
                {this.state.entry.keyword} <br />
                {this.state.entries.length} <br />
                {this.props.parentData.entries.length}
              </pre>
              <ul>
                {this.mapTest(this.state.entries)}
              </ul>
  
              <div className="search-input">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Type pokemon name" onChange={event => this.setKeyword(event)} value={this.state.entry.keyword} />
                </div>
              </div>
  
              <div className="search-action">
                <div className="search-action__wrapper-content">
                  <div className="row">
                    <div className="col-lg-6">
                      <Button variant="primary" className="btn-block">Find pokemon</Button>
                    </div>
                    <div className="col-lg-6">
                      <Button variant="primary" className="btn-block">Find all pokemon</Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
            <section className="pokemon__section pokemon-list">
              <h3 className="title">
                Pokemon List
              </h3>
              <ul className="pokemon-list__wrapper row">
                <li className="pokemon-list__item col-lg-3">
                  <div className="card">
                    <div className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

class PageResult extends Component {
  constructor (props) {
    super(props)
    this.state = {
      entry: {
        keyword: '',
        filterByType: '',
        filterByAbility: '',
        offset: 0,
        limit: 10
      },
      entries: [],
      isLoading: false
    }

    this.templateProps = {
      state: this.state,
      setStateData: this.setState
    }
  }

  componentDidMount () {
    this.fetchResource()

    setTimeout(() => {
      this.setState({ ...this.state })

      if (this.state.entries.length > 0) {
        this.state.entries.forEach(item => {
          this.fetchDetail(item.name)

          // this.setState({ ...this.state })
        })
      }
    }, 1000)
  }

  actionPokemonList (param) {
    return new Promise((resolve, reject) => {
      api.pokemon.list(param)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  actionPokemonDetail (name) {
    return new Promise((resolve, reject) => {
      api.pokemon.detail(name)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  fetchResource () {
    const param = QueryString.stringify(this.state.entry)
    
    this.state.isLoading = true
    this.actionPokemonList(param)
      .then(response => {
        this.state.isLoading = false
        this.state.entries = response.data.results
      })
      .catch(error => {
        console.info('err : ', error)
        this.state.isLoading = false
        this.state.entries = []
      })
  }

  fetchDetail (name) {
    this.actionPokemonDetail(name)
      .then(response => {
        this.state.entries = this.state.entries.map(itemMap => {
          return {
            ...itemMap,
            detail: itemMap.name === name ? response.data : {}
          }
        })

        this.setState({ ...this.state })
      })
      .catch(error => {
        console.info('err : ', error)
        this.state.entries = this.state.entries.map(itemMap => {
          return {
            ...itemMap,
            detail: {}
          }
        })

        this.setState({ ...this.state })
      })
  }

  render () {
    return <LayoutBlank content={<Template parentData={this.state}></Template>}></LayoutBlank>
  }
}

export default PageResult
