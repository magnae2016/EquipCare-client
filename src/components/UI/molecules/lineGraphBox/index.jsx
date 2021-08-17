import React, { Fragment, useRef, useEffect } from 'react'
import './index.css'
import LineGraph from './lineGraph'

function LineGraphBox({ data, filter }) {
    const scrollView = useRef(null)

    const colors = {
        error: '#7a59f1',
        down: '#f05514',
    }
    const theme = colors[filter] || '#34bcca'

    // useEffect(() => {
    //     scrollView.current.scrollLeft = scrollView.current.scrollWidth
    // }, [filter])

    return (
        <Fragment>
            <div className="line_graph">
                <div className="chart_con">
                    <div className="chart">
                        <div ref={scrollView} className="scroll_wrapper">
                            <LineGraph data={data} theme={theme} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LineGraphBox
