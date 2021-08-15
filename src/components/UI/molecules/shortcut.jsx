import React from 'react'

function Shortcut({ prefix, title, selected }) {
    return (
        <li className="ce_index_item" role="presentation">
            <a className="ce_index_a" aria-selected={selected}>
                <div className="ce_tit">{prefix}</div>
                <div className="ce_price">{title}</div>
                <span className="ce_gap_rate ce_dec "></span>
            </a>
        </li>
    )
}

export default Shortcut
