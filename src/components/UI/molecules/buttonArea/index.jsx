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

function ButtonArea({ filters, filter, onClick }) {
    let initialState = Array(filters.length).fill(false)
    initialState[0] = true
    const [status, setStatus] = useState(initialState)

    function handleClick(i) {
        const current = Array(filters.length).fill(false)
        current[i] = true
        setStatus(current)
    }

    return (
        <div className="button_area">
            <h2 className="tablist">
                {filters.map((element, index) => (
                    <Button
                        key={index}
                        text={element}
                        isSelected={status[index]}
                        onClick={() => {
                            handleClick(index)
                            onClick(element)
                        }}
                    />
                ))}
            </h2>
        </div>
    )
}

export default ButtonArea
