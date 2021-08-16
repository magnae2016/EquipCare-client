import React, { useState } from 'react'
import './index.css'

function TableBox({ datas }) {
    let current = [...datas]

    const [sortText, setSortText] = useState(true)
    const [names, setNames] = useState(current.map(({ EQ_NAME }) => EQ_NAME))
    const [counts, setCounts] = useState(current.map(({ COUNT }) => COUNT))

    function handleClickSortTab(e) {
        setNames((prevState) => [...prevState].reverse())
        setCounts((prevState) => [...prevState].reverse())
        setSortText((prevState) => !prevState)
    }

    return (
        <div className="table_box">
            <div className="table_title">
                <h3>장비별 알람 수</h3>
                <div className="sort_tab">
                    <div className="sub_option_area">
                        <a
                            className="sub_option"
                            aria-selected="true"
                            role="option"
                            onClick={handleClickSortTab}
                        >
                            {sortText ? '내림차순' : '오름차순'}
                        </a>
                    </div>
                </div>
            </div>
            <div className="table_content">
                <div className="table_header">
                    <table>
                        <caption>장비별 알람 수</caption>
                        <tbody>
                            <tr>
                                <th>장비</th>
                            </tr>
                            <tr>
                                <th>알람 수</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table_body">
                    <div className="inner">
                        <div className="api_list_scroll">
                            <table>
                                <caption>장비별 알람 수</caption>
                                <thead>
                                    <tr>
                                        {names.map((element, index) => (
                                            <th scope="col" key={index}>
                                                {element}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {counts.map((element, index) => (
                                            <td key={index}>{element}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableBox
