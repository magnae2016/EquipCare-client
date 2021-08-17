import React, { useState } from 'react'
import './index.css'

function Button({ text, isSelected, onClick }) {
    return (
        <button
            type="button"
            className={isSelected ? 'tab on' : 'tab'}
            onClick={onClick}
        >
            <span className="text">{text}</span>
        </button>
    )
}

function ButtonArea({ names, values, onClick }) {
    let initialState = Array(values.length).fill(false)
    initialState[0] = true
    const [status, setStatus] = useState(initialState)

    function handleClick(i) {
        const current = Array(values.length).fill(false)
        current[i] = true
        setStatus(current)
    }

    return (
        <div className="button_area">
            <h2 className="tablist">
                {values.map((element, index) => (
                    <Button
                        key={index}
                        text={names[index]}
                        isSelected={status[index]}
                        onClick={() => {
                            handleClick(index)
                            onClick(values[index])
                        }}
                    />
                ))}
            </h2>
        </div>
    )
}

export default ButtonArea
