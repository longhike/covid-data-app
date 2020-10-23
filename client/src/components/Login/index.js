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
                        <Card>
                            <div className='card-header'>
                                <strong>GLOBAL COVID-19</strong>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="username" onChange={e => setState(e.target.value)} ></input>
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