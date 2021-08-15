import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'

function ListItem({ ALARM_COUNT, EQ_NAME, EQ_TESTER, MTBI_VALUE, START_TIME }) {
    const isToday = false // TODO: Verify isToday
    return (
        <li className={isToday ? 'ce_eitem ce_announce' : 'ce_eitem'}>
            <a className="ce_ea">
                <span className="ce_time">
                    {START_TIME.substr(5, 5).replace('-', '.')}
                </span>
                <div className="ce_emw"></div>
                <div className="ce_etw">
                    <div className="ce_etit">
                        {EQ_TESTER && (
                            <em className="ce_country">{EQ_TESTER}</em>
                        )}
                        {EQ_NAME}
                    </div>
                    <div className="ce_etw">
                        <div className="ce_einfo">
                            <span className="info">
                                <strong className="ce_st">MTBI</strong>
                                {MTBI_VALUE}분
                            </span>
                            <span className="info">
                                {START_TIME.substr(0, 10)}
                                <span className="ce_gap">집계</span>
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    )
}

function MTBITimelineList() {
    const [announces, setAnnounces] = useState([])
    const [isToggleOn, setIsToggleOn] = useState(false)
    const [initialLimit, maxLimit] = [3, 10]
    const [limit, setLimit] = useState(initialLimit)

    function handleClickMoreButton(e) {
        setIsToggleOn((prevState) => !prevState)
        setLimit((prevState) =>
            prevState == maxLimit ? initialLimit : maxLimit
        )
    }

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/api/equipment/mtbi', {
                params: { limit: 10, offset: 0 },
            })
            setAnnounces(response.data)
        }
        fetchData()
    }, [])

    return (
        <div id="list-item-1" className="grid1">
            <div className="comp_economy">
                <div className="ce_title_wrap">
                    <div className="ce_title_a">
                        <h3 className="ce_title">
                            <span className="ce_main">MTBI 현황</span>
                        </h3>
                    </div>
                </div>
                <div className="ce_stock_wrap" role="tabpanel">
                    <ul className="ce_elist">
                        {announces.slice(0, limit).map((element) => (
                            <ListItem
                                key={element.ID}
                                EQ_NAME={element.EQ_NAME}
                                EQ_TESTER={element.EQ_TESTER}
                                MTBI_VALUE={element.MTBI_VALUE}
                                START_TIME={element.START_TIME}
                                ALARM_COUNT={element.ALARM_COUNT}
                            />
                        ))}
                    </ul>
                    <div className="ce_info">
                        <button
                            type="button"
                            className={
                                !isToggleOn
                                    ? 'ce_btn_more ce_pagination'
                                    : 'ce_btn_more fold ce_pagination'
                            }
                            onClick={handleClickMoreButton}
                        >
                            {!isToggleOn ? '더보기' : '접기'}
                        </button>
                        {isToggleOn && (
                            <button
                                type="button"
                                className="ce_btn_more ce_pagination"
                            >
                                더보기
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MTBITimelineList
