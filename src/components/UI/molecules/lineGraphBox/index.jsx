import React, { Fragment, useRef, useEffect } from 'react'
import './index.css'
import LineGraph from './lineGraph'
import ButtonArea from '@/components/UI/molecules/buttonArea'

function LineGraphBox({ data }) {
    const scrollView = useRef(null)

    useEffect(() => {
        scrollView.current.scrollLeft = scrollView.current.scrollWidth
    }, [])

    return (
        <Fragment>
            <div className="line_graph">
                <div className="chart_con">
                    <div className="chart">
                        <div ref={scrollView} className="scroll_wrapper">
                            <LineGraph data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LineGraphBox
