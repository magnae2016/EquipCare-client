import React, { Fragment } from 'react'
import './index.css'
import LineGraph from './lineGraph'

function LineGraphBox({ data }) {
    return (
        <Fragment>
            <div className="line_graph">
                <div className="chart_con">
                    <div className="chart">
                        <div className="scroll_wrapper">
                            <LineGraph data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LineGraphBox
