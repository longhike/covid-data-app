import React, { Component } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import HtmlToExcel from 'react-html-table-to-excel'
import Navbar from 'react-bootstrap/Navbar'

// props here are from App // Main

function myNav (props) {
    
    function logOut (event) {
        event.preventDefault()
        axios.post('/logout').then(response => {
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

        return (
            <Navbar>
                <Navbar.Brand style={{ flex: 1 }}>
                    <h3><strong>Precision19</strong></h3>
                    <h5>Welcome, {props.username}</h5>
                   
                    
                </Navbar.Brand>
                <ButtonToolbar>
                    <ButtonGroup className="mr-2">
                        <HtmlToExcel 
                            table="table"
                            sheet="precision_19_data"
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