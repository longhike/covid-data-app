import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Warn from '../Warn'
import Button from 'react-bootstrap/Button'
import API from '../../utils/api'

function SearchCard() {
    const [date, setDate] = useState(["2020", "08", "22"]);

    const update = ({ target }) => {
        const index = parseInt(target.getAttribute("data-index"))
        const value = target.value.length == 2 ? target.value : "0" + target.value;

        date[index] = value;

        setDate(date);
    }

    const search = async () => {
        try {
            const result = await API.runSearch(date.join("-"))
            console.log(result)
        } catch (error) {
            console.warn(error)
        }
    }

    return (
        <div>
            <Card>
                <p>Enter the month and day below and click "Get Sad" to see the Johns Hopkins global data for the given month/day (for example, 2/23 for February 22nd, 2020).</p>
                <p><strong>PLEASE NOTE:</strong> the first day for which JHU has data available is Jan 22, 2020.</p>
                <div className='form-group'>
                    <input className='form-control' type="number" data-index="1" placeholder='Month (#)' onChange={update}></input>
                </div>
                <div className='form-group'>
                    <input className='form-control' type="number" data-index="2" placeholder='Day (#)' onChange={update}></input>
                </div>
                <div className="form-group">
                    <select className="form-control" type="number" data-index="0" placeholder='Year (#)' onChange={update}>
                    <option>2020</option>
                </select>
                </div>
                <p id="warn" style={{ color: "#f5da42" }}></p>
                <Button className='btn btn-primary' onClick={search} id='submit-glob-tot'>Go</Button>
            </Card>
            <Warn>This will render a warning for date validation</Warn>
        </div>
    )
}

export default SearchCard