import React from 'react'
import './index.css'

function Button({ text }) {
    return (
        <button type="button" className="tab">
            <span class="text">{text}</span>
        </button>
    )
}

function ButtonArea(params) {
    return (
        <div className="button_area">
            <h2 className="tablist">
                <Button text="동네별" />
                <Button text="전국" />
                <Button text="미세먼지" />
            </h2>
        </div>
    )
}

export default ButtonArea
