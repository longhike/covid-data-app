import React, { useState } from 'react'
import API from '../../utils/api'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// GOING TO HIT THE USER SIGNUP DB FROM HERE, WILL GO TO PASSPORT/SESSION

function LoginForm() {

    return (
        <Card>
            <div className='card-header'>
                Enter username
            </div>
            <form method="post">
                <div className="form-group">
                    <input type="text" placeholder="username" name="username"></input>
                </div>
                <div className='form-group'>
                    <Button type="submit" formAction="/login"className='btn btn-sm btn-secondary'>Log In</Button>
                </div>
            </form>
        </Card>
    )
}

export default LoginForm