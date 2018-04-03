import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css'
import SearchBox from './components/SearchBox'
import BlankScreen from './components/BlankScreen'
import Loading from './components/Loading'

class App extends Component {
  componentDidMount() {
    fetch('https://api.github.com/users/ritwickdey/repos')
      .then(response => response.json())
      .then(console.log)
      .catch(console.log)
  }

  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  onChangeInput = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <SearchBox
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.onChangeInput}
          placeholder="GitHub username"
        />
        {this.props.appState === 'blank' && <BlankScreen />}
        {this.props.appState === 'loading' && <Loading />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  appState: state.appState,
  username: state.username,
  repos: state.repos
})

export default connect(mapStateToProps)(App)
