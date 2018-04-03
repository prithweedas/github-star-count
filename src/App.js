import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './styles.css'
import SearchBox from './components/SearchBox'
import BlankScreen from './components/BlankScreen'
import Loading from './components/Loading'
import { setUser } from './store/actionCreators'
import {
  BLANK_STATE,
  LOADING_STATE,
  DONE_STATE,
  ERROR_STATE
} from './utils/AppState'
import Profile from './components/Profile'

class App extends Component {
  componentDidMount() {
    const username = localStorage.getItem('username')
    if (username) this.props.setUser(username)
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

  openRepo = url => {
    window.open(url, '_blank')
  }

  setUser = () => {
    this.props.setUser(this.state.username)
  }

  render() {
    return (
      <div
        className="App"
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column'
        }}
      >
        <SearchBox
          setUser={this.setUser}
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.onChangeInput}
          placeholder="GitHub username"
        />
        {this.props.appState === DONE_STATE && (
          <Profile
            openRepo={this.openRepo}
            user={this.props.userData}
            repos={this.props.repos}
          />
        )}
        {this.props.appState === BLANK_STATE && (
          <BlankScreen text="Enter an username and press &#8629;" />
        )}
        {this.props.appState === ERROR_STATE && (
          <BlankScreen text={'Oops! Something went wrong'} />
        )}
        {this.props.appState === LOADING_STATE && <Loading />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  appState: state.appState,
  userData: state.userData,
  username: state.username,
  repos: state.repos
})

const mapActionToProps = dispatch =>
  bindActionCreators(
    {
      setUser
    },
    dispatch
  )

export default connect(mapStateToProps, mapActionToProps)(App)
