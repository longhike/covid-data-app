import React from 'react'
import API from '../../utils/api'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

// need state in here for user info. assign that state to props passed from App.

function LoginForm(props) {
    const [state, setState] = React.useState("");
    const history = useHistory();

    React.useEffect(() => {
        if (props.loggedIn) history.push("/")
    }, [props.loggedIn])

    return (
        <Card>
            <div className='card-header'>
                Enter username
            </div>
            <div className="form-group">
                <input type="text" placeholder="username" onChange={e => setState(e.target.value)} ></input>
            </div>
            <div className='form-group'>
                <Button type="submit" className='btn btn-sm btn-secondary' onClick={() => props.loginUser(state)}>Log In</Button>
            </div>
        </Card>
    )
}

export default LoginForm