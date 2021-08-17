import React, { Fragment } from 'react'
import './index.css'
import LineGraph from './lineGraph'

function LineGraphBox(params) {
    const data = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 400, pv: 2400, amt: 2400 },
    ]
    return (
        <Fragment>
            <div className="line_graph">
                <div className="chart_con">
                    <div className="chart">
                        {/* <div className="_yAxisReplication bb"></div> */}
                        <div className="scroll_wrapper">
                            <div className="origin _origin bb">
                                <LineGraph data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LineGraphBox
