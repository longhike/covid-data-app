import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from 'axios'
import Main from './pages/main';
import Login from './pages/login'


// add function to include with compononent 


class App extends Component {

  state = {
    loggedIn: false,
    username: null,
    userid: null
  }

  componentDidMount() {
    this.updateUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser = () => {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          userid: response.data.user._id
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null,
          userid: null
        })
      }
    })
  }

  loginUser = async (name) => {
    console.log(name)

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: name })
    })
      .then(res => res.json())
      .then(res => this.setState({ loggedIn: true, username: res.username, userid: res._id }))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <Router>
        <Route exact path="/login" component={(props) => <Login {...props} loggedIn={this.state.loggedIn} username={this.state.username} userid={this.state.userid} loginUser={this.loginUser} />} />

        <Route exact path="/" component={Main} loggedIn={this.state.loggedIn} username={this.state.username} userid={this.state.userid} />
      </Router>
    );
  }

}

export default App;