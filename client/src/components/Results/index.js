import React from 'react';
import API from '../../utils/api'
import Table from 'react-bootstrap/Table'

function Results (props) {

    function _delete(id) {
        API.deleteSearch(id)
          .then(props.getPosts)
          .catch(err => console.log(err));
      }

    const currentPosts = props.currentPosts
    let mapPosts
    if (currentPosts) {
        console.log(currentPosts);
        mapPosts = currentPosts.map(currentPost => {
            let date = new Date(currentPost.date).toISOString().substring(0, 10)
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
                <td>
                    <button className='btn btn-warning btn-sm' onClick={() => _delete(currentPost._id)}>
                        Delete
                    </button>
                </td>
            </tr>
            )
        }) 
    }


    
    return (
    <div>
        <Table id={'table'} striped bordered hover >
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
                {mapPosts}
            </tbody>
        </Table>
    </div>
    )

}

export default Results        