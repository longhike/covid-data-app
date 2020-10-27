import React, { useEffect } from 'react';
import dateFormat from 'dateformat'
import API from '../../utils/api'
import Table from 'react-bootstrap/Table'

function Results (props) {
    const currentPosts = props.currentPosts
    let currentLength
    let mapPosts

    if (currentPosts) {
        currentLength = currentPosts.length
        mapPosts = currentPosts.map(currentPost => {
            let date = new Date(currentPost.date).toISOString().substring(0, 10)
            date = date + "T19:03:34+00:00"
            date = dateFormat(date, "mediumDate")
            return (
            <tr key={currentPost._id}>
                <td>
                    {date}
                </td>
                <td>
                    {currentPost.confirmed.toLocaleString()}

                </td>
                <td>
                    {currentPost.deaths.toLocaleString()}
                </td>
                <td>
                    {currentPost.recovered.toLocaleString()}
                </td>
                <td >
                    <button className='btn btn-warning btn-sm' onClick={() => _delete(currentPost._id)}>
                        Delete
                    </button>
                </td>
            </tr>
            )
        }) 
    } 

    function _delete(id) {
        API.deleteSearch(id)
          .then(props.getPosts)
          .catch(err => console.log(err));
    }
    
    return (
    <div>
        <Table id={'table'} striped bordered hover responsive >
            <thead>
                <tr>
                <th>
                    Date
                </th>
                <th>
                    Global Confirmed
                </th>
                <th>
                    Global Deaths
                </th>
                <th>
                    Global Recovered
                </th>
                <th>
                    Remove Search
                </th>
                </tr>
            </thead>
            <tbody>
                {currentLength > 0 ? mapPosts : <tr key='none' style={{ textAlign: 'center' }}><td colSpan="5">No results yet</td></tr>}
            </tbody>
        </Table>
    </div>
    )

}

export default Results        