import React, { Component } from 'react';
import axios from 'axios'
import Main from './pages/main';
import Login from './pages/login'


class App extends Component {

  state = {
    loggedIn: false,
    username: null,
    userid: null,
    posts: null,
    currentPosts: null
  }

  // when App loads, run getUser function which will perform a get and set the state to the user if there's a session in progress
  componentDidMount() {
    this.getUser()
  }

  updateUser(state) {
    this.setState(state)
  }

  getUser = () => {
    axios
    .get('/user')
    .then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user,
          userid: response.data.id,
          posts: response.data.posts

        })
        this.getPosts()
      } else {
        this.setState({
          loggedIn: false,
          username: null,
          userid: null
        })
      }
    })
  }

  getPosts = () => {
    axios
      .get('/posts')
      .then(response => {
        this.setState({
          currentPosts: response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  loginUser = (name) => {

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: name })
    })
      .then(res => res.json())
      .then(res => this.setState({ loggedIn: true, username: res.username, userid: res._id }))
      .then(this.updateUser)
      .then(this.getUser)
      .then(window.location.reload())
      .catch(err => console.log(err))
  }
  
  render() {
    const isLoggedIn = this.state.loggedIn
    let pageShown

    if (isLoggedIn) {
      pageShown = <Main 
        loggedIn={this.state.loggedIn} 
        username={this.state.username} 
        userid={this.state.userid}
        posts={this.state.posts}
        currentPosts={this.state.currentPosts}
        getPosts={this.getPosts}
        updateUser={this.updateUser} 
        />
    } else {
      pageShown = <Login 
        loggedIn={this.state.loggedIn} 
        username={this.state.username} 
        userid={this.state.userid} 
        loginUser={this.loginUser} 
      />
    }
    return (
      <div>
        {pageShown}
      </div>
    );
  }

}

export default App;