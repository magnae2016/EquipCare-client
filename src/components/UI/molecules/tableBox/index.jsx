import React, { useState, useEffect } from 'react'
import './index.css'

function TableBox({ datas, filter }) {
    const [sortText, setSortText] = useState(true)
    const [isDescending, setIsDescending] = useState(true)
    const names = datas.map(({ EQ_NAME }) => EQ_NAME)
    const counts = datas.map(({ COUNT }) => COUNT)

    function handleClickSortTab(e) {
        setIsDescending((prevState) => !prevState)
        setSortText((prevState) => !prevState)
    }

    return (
        <div className="table_box">
            <div className="table_title">
                <h3>
                    장비별 {filter ? `${filter.toUpperCase()} ` : ''}알람 수
                </h3>
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
                                        {names.map((element, index, array) => (
                                            <th scope="col" key={index}>
                                                {isDescending
                                                    ? element
                                                    : array[
                                                          array.length -
                                                              index -
                                                              1
                                                      ]}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {counts.map((element, index, array) => (
                                            <td key={index}>
                                                {isDescending
                                                    ? element
                                                    : array[
                                                          array.length -
                                                              index -
                                                              1
                                                      ]}
                                            </td>
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
