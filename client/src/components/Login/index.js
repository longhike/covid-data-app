import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'


function LoginForm(props) {
    const [state, setState] = React.useState("");
    const history = useHistory();

    React.useEffect(() => {
        if (props.loggedIn) history.push("/")
    }, [props.loggedIn])

    return (
        <div className='container'>
            <div className='jumbotron' style={{ background: 'none' }}>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col-md-6'>
                        <Card  style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <div className='card-header'>
                                <h1>
                                    <strong>
                                        Precision19
                                    </strong>
                                </h1>
                            </div>
                            <div className='card-body'>
                                <h4>
                                    A targeted resource for researchers
                                </h4>
                                <p>
                                    If you have an account, enter your username and log in.
                                </p>
                                <p>
                                    If you've never logged in, just enter a username and hit "Log In," and an account will be created for you.
                                </p>
                            </div>
                            <div className="form-group">
                                <input className='form-control' type="text" placeholder="username" onChange={e => setState(e.target.value)} ></input>
                            </div>
                            <div className='form-group'>
                                <Button type="submit" className='btn btn-sm btn-secondary' onClick={() => props.loginUser(state)}>Log In</Button>
                            </div>
                        </Card>
                    </div>
                    <div className='col'></div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm