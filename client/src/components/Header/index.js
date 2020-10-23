import React, { Component } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import HtmlToExcel from 'react-html-table-to-excel'
import Navbar from 'react-bootstrap/Navbar'

// props here are from App // Main

function myNav (props) {
    console.log(props);
    
    function logOut (event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            props.updateUser({
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
    
    function copyTable () {
        console.log('copied!')
        const urlField = document.getElementById('table')
        const range = document.createRange()
        range.selectNode(urlField)
        window.getSelection().addRange(range)
        document.execCommand('copy')
    }

        return (
            <Navbar>
                <Navbar.Brand style={{ flex: 1 }}>
                    Welcome, {props.username}
                </Navbar.Brand>
                <ButtonToolbar>
                    <ButtonGroup className="mr-2">
                        <Button variant="info" className='btn-sm' onClick={copyTable}>
                            Copy Table
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2">
                        <HtmlToExcel 
                            table="table"
                            filename={`data_export_${props.username}`}
                            buttonText="Download"
                            className="btn btn-dark btn-sm"
                        />
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button variant="danger" className='btn-sm' onClick={logOut}>
                            Log Out
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Navbar>
        )
}

export default myNav