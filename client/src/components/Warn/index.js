import React from 'react'
import Card from 'react-bootstrap/Card'

function WarnDiv (props) {
    return (
        <Card id='warn' style={{display: "block"}}>
            <p className='card-text' 
            style={
                { 
                    color: '#ffdd00',
                    display: props.warnDisplay ? props.warnDisplay : "none" 
                }
            }>
                {props.children}
            </p>
        </Card>
    )
}

export default WarnDiv