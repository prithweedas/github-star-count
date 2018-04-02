import React, { Component } from 'react'

import './styles.css'
import SearchBox from './components/Searchbox'

class App extends Component {
  // componentDidMount() {
  //   fetch('https://api.github.com/users/ritwickdey/repos')
  //     .then(response => response.json())
  //     .then(console.log)
  //     .catch(console.log)
  // }

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
      <div>
        <SearchBox
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.onChangeInput}
          placeholder="GitHub username"
        />
      </div>
    )
  }
}

export default App
