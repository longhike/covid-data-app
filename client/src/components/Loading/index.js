import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

// loading takes a prop from it's current container, either the results or login components

function Loading (props) {
    return (
        <Spinner 
            animation="border" 
            variant="light" 
            style={
                { display: props.loadingDisplay ? props.loadingDisplay : "none" }
            }
        />
    )
}

export default Loading