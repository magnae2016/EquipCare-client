import React from 'react'
import './index.css'

function BtnMore({ className, onClick, text }) {
    return (
        <button
            type="button"
            className={`ce_btn_more ce_pagination ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default BtnMore
