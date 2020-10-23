import React, { Component } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'

// props here are from App // Main

class myNav extends Component {
    
    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })     
        }
        })
        .then(
            window.location.reload()
        )
        .catch(error => {
            console.log('Logout error')
        })
      }
    
    copytable() {
        console.log('copied!')
        const urlField = document.getElementById('table')
        const range = document.createRange()
        range.selectNode(urlField)
        window.getSelection().addRange(range)
        document.execCommand('copy')
    }

    render () {
        return (
            <Navbar>
                <Navbar.Brand>
                    Welcome, {this.props.username}
                </Navbar.Brand>
                <span>
                    <Button onClick={this.copytable}>
                        Copy Table
                    </Button>
                </span>
                <span>
                    <Button onClick={this.logout}>
                        Logout
                    </Button>
                </span>
            </Navbar>
        )
        }
}

export default myNav