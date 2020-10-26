import React from 'react'
import Card from 'react-bootstrap/Card'

function Narrative() {
    return (
        <div>
            <Card id='narrative'>
                <h4>
                    <strong>
                        For precision research on COVID-19.
                    </strong>
                </h4>
                <p>
                    Comensurate with the scale of the catastrophy that is the COVID-19 pandemic, the volume of data generated is staggering. This is a tool for users undertaking specific, targeted research.
                </p>
                <p>
                    By entering the month, day, and year, and clicking "Go," Johns Hopkins global data for that date will be returned in the chart to the right.
                </p>
                <p>
                    Download your data to an Excel file by clicking the "Download" button on the navigation bar.
                </p>
                <p>
                    <strong>PLEASE NOTE:</strong> the first day for which Johns Hopkins has data available is Jan 22, 2020.
                </p>
            </Card>
        </div>
    )
}

export default Narrative