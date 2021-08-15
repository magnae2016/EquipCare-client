import React from 'react'
import { HashLink } from 'react-router-hash-link'

function Shortcut({ prefix, title, selected, hash = '#' }) {
    return (
        <li className="ce_index_item" role="presentation">
            <HashLink
                smooth
                to={{ hash: '#list-item-1' }}
                className="ce_index_a"
                aria-selected={selected}
            >
                <div className="ce_tit">{prefix}</div>
                <div className="ce_price">{title}</div>
                <span className="ce_gap_rate ce_dec "></span>
            </HashLink>
        </li>
    )
}

export default Shortcut
