import React, { Fragment, useState } from 'react'
import './index.css'

function Bar({ data, isSelected, onClick }) {
    const { EQ_NAME, COUNT, ratio } = data
    return (
        <div
            className={isSelected ? 'bar item e_local on' : 'bar item e_local'}
            onClick={onClick}
        >
            <a>
                <div className="graph_wrap">
                    <span
                        className="graph_bar"
                        style={{
                            height: `${ratio * 10}%`,
                        }}
                    >
                        {' '}
                        <span className="num">{`${ratio.toFixed(2)}%`}</span>
                    </span>
                </div>
                <div className="num_title">{EQ_NAME}</div>
            </a>
        </div>
    )
}

function Board({ datas, status, onClick }) {
    function renderBar(i) {
        return (
            <Bar
                key={i}
                data={datas[i]}
                isSelected={status[i]}
                onClick={() => onClick(i)}
            />
        )
    }

    return (
        <Fragment>{status.map((element, index) => renderBar(index))}</Fragment>
    )
}

function BarGraphBox({ datas, count }) {
    const initialLimit = 10
    const [status, setStatus] = useState(Array(initialLimit).fill(false))

    function handleClick(i) {
        const current = Array(initialLimit).fill(false)
        current[i] = true
        setStatus(current)
    }

    let current = datas.slice(0, initialLimit).map((element) => ({
        ...element,
        ratio: (element.COUNT / count) * 100,
    }))

    return (
        <div className="graph_box">
            <div className="legend_area">
                <ul>
                    <li className="e_president">알람</li>
                    <li className="e_general">Error</li>
                    <li className="e_local">Down</li>
                </ul>
            </div>
            <div className="graph_area">
                <div className="graph_header">
                    <ol>
                        <li>10%</li>
                        <li>8%</li>
                        <li>6%</li>
                        <li>4%</li>
                        <li>2%</li>
                        <li>0%</li>
                    </ol>
                </div>
                <div className="barChart graph_scroll_wrap">
                    <div className="inner">
                        <div className="list_scroll">
                            {current.length > 0 && (
                                <Board
                                    datas={current}
                                    status={status}
                                    onClick={(i) => handleClick(i)}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarGraphBox
