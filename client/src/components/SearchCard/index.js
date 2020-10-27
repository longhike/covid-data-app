import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Warn from '../Warn'
import Loading from '../Loading'
import Button from 'react-bootstrap/Button'
import API from '../../utils/api'

function SearchCard(props) {
    const [date, setDate] = useState(["2020", "08", "22"]);
    const [warnDisplay, setWarnDisplay] = useState(false)
    const [loadingDisplay, setLoadingDisplay] = useState(false)

    const update = ({ target }) => {
        const index = parseInt(target.getAttribute("data-index"))
        const value = target.value.length >= 2 ? target.value : "0" + target.value;

        date[index] = value;

        setDate(date);
    }

    const search = async () => {
        setLoadingDisplay(true)
        try {
            const result = await API.runSearch(date.join("-"))
            if (result === undefined) {
                setLoadingDisplay(false)
                setWarnDisplay(true)
            } else {
                setLoadingDisplay(false)
                setWarnDisplay(false)
                props.getPosts()
            }
        } catch (error) {
            setLoadingDisplay(false)
            console.warn(error)
        }
    }

    return (
        <div>
            <Card>
                <div className='form-group'>
                    <input className='form-control' type="number" data-index="1" placeholder='Month (#)' onChange={update}></input>
                </div>
                <div className='form-group'>
                    <input className='form-control' type="number" data-index="2" placeholder='Day (#)' onChange={update}></input>
                </div>
                <div className="form-group">
                        <select className="form-control" type="number" data-index="0" placeholder='Year (#)' onChange={update}>
                        <option>2020</option>
                        <option>2021</option>
                    </select>
                </div>
                <Warn warnDisplay={warnDisplay}>Please use a valid date</Warn>
                <Loading loadingDisplay={loadingDisplay} />
                <Button className='btn btn-primary btn-sm' onClick={search} id='submit-glob-tot'>Go</Button>
            </Card>
        </div>
    )
}

export default SearchCard