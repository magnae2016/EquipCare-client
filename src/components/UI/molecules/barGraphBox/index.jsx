import React, { Fragment, useState } from 'react'
import './index.css'

function Bar({ data, isSelected, onClick, filter, tick }) {
    const { EQ_NAME, ratio } = data
    const match = {
        error: 'e_local',
        down: 'e_president',
    }
    const color = match[filter] || 'e_general'
    return (
        <div
            className={
                isSelected ? `bar item ${color} on` : `bar item ${color}`
            }
            onClick={onClick}
        >
            <a>
                <div className="graph_wrap">
                    <span
                        className="graph_bar"
                        style={{
                            height: `${ratio * tick}%`,
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

function Board({ datas, status, onClick, filter, tick }) {
    function renderBar(i) {
        return (
            <Bar
                key={i}
                data={datas[i]}
                isSelected={status[i]}
                onClick={() => onClick(i)}
                filter={filter}
                tick={tick}
            />
        )
    }

    return (
        <Fragment>{status.map((element, index) => renderBar(index))}</Fragment>
    )
}

function BarGraphBox({ datas, count, onClick, filter }) {
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
    const max = Math.ceil(current[0].ratio)
    const t = parseInt(max / 5) + 1
    const tick = 100 / (t * 5)

    return (
        <div className="graph_box">
            <div className="legend_area">
                <ul>
                    <li className="e_general" onClick={() => onClick('')}>
                        알람
                    </li>
                    <li className="e_local" onClick={() => onClick('error')}>
                        ERROR
                    </li>
                    <li className="e_president" onClick={() => onClick('down')}>
                        DOWN
                    </li>
                </ul>
            </div>
            <div className="graph_area">
                <div className="graph_header">
                    <ol>
                        {[...Array(6).keys()]
                            .reverse()
                            .map((element, index) => (
                                <li key={index}>{element * t}%</li>
                            ))}
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
                                    filter={filter}
                                    tick={tick}
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
