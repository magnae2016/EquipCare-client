import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import './index.css'
import ApiSubjectBx from '@/components/UI/molecules/apiSubjectBx'
import BtnMore from '@/components/UI/atoms/btnMore'

function ListEmpty({ warning, description }) {
    return (
        <div className="sggt_container">
            <div className="nx_suggest_recent_nothing">
                {warning}
                <br />
                <span className="kwd_dsc">{description}</span>
            </div>
        </div>
    )
}

function List({ datas, isFirst }) {
    const { EQ_NAME, EQ_TESTER, COUNT, ratio } = datas
    return (
        <li className={`status_item party100 ${isFirst ? 'is_first' : ''}`}>
            <div className="district_candidate">
                <span className="candidate_name">{EQ_NAME}</span>
                <em className="candidate_party">{EQ_TESTER}</em>
            </div>
            <div className="district_rate">
                <span className="rate_txt">
                    {ratio.toFixed(1)}
                    <span className="rate_per">%</span>
                </span>
            </div>
            <div className="district_graph">
                <div className="graph_bar">
                    <span
                        className="graph_bg"
                        style={{ left: `${ratio.toFixed(1)}%` }}
                    ></span>
                </div>
            </div>
            <div className="district_count">
                <span className="count_txt">{COUNT}</span>
            </div>
        </li>
    )
}

function EquipmentByAlarm({ keyword }) {
    const [count, setCount] = useState(undefined)
    const [orderedList, setOrderedList] = useState([])
    const [updatedAt, setUpdatedAt] = useState(undefined)
    const [isToggleOn, setIsToggleOn] = useState(false)
    const [maxLimit, setMaxLimit] = useState(10)
    let initialLimit = 5
    const [limit, setLimit] = useState(initialLimit)

    function handleClickMoreButton(e) {
        setIsToggleOn((prevState) => !prevState)
        setLimit((prevState) =>
            prevState === maxLimit ? initialLimit : maxLimit
        )
    }

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                `/api/alarms/${keyword}/equipments`
            )
            const count = response.data.count
            const datas = response.data.datas
            let current = datas.map((element) => ({
                ...element,
                ratio: (element.COUNT / count) * 100,
            }))
            setOrderedList(current)
            setCount(count)
            setUpdatedAt(response.data.last_update_time)
            setMaxLimit(count)
        }
        fetchData()
    }, [])

    return (
        <section id="list-item-4">
            <ApiSubjectBx title="알람별 장비 현황">
                <div className="district">
                    <div className="district_info">
                        <div className="info">
                            <p className="info_l">
                                원하시는 알람을 선택하실 수 있습니다.
                            </p>
                        </div>
                    </div>
                    <div className="district_form">
                        <div className="selectbox">
                            <div className="selectbox_wrp selectbox_wrp-long1">
                                <Link to="/select">
                                    <button className="selectbox_btn">
                                        {keyword || '알람 종류를 선택하세요.'}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="district_scroll">
                        {!keyword ? (
                            <ListEmpty
                                warning="알람 종류를 선택하지 않았습니다."
                                description="알람 종류를 선택해주세요."
                            />
                        ) : count === 0 ? (
                            <ListEmpty
                                warning="당일 발생한 알람이 없습니다."
                                description="다른 알람을 선택해주세요."
                            />
                        ) : (
                            <div className="district_content">
                                <div className="title">
                                    <h3 className="title_txt">{keyword}</h3>
                                    <em className="title_info title_info-chk">
                                        {moment(updatedAt).format('HH:mm:ss')}{' '}
                                        업데이트
                                    </em>
                                </div>
                                <div className="status">
                                    <ul className="status_list">
                                        {orderedList
                                            .slice(0, limit)
                                            .map((element, index) => (
                                                <List
                                                    key={index}
                                                    datas={element}
                                                    isFirst={
                                                        index === 0
                                                            ? true
                                                            : false
                                                    }
                                                />
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="ce_info">
                        <BtnMore
                            className={!isToggleOn ? '' : 'fold'}
                            onClick={handleClickMoreButton}
                            text={!isToggleOn ? '더보기' : '접기'}
                        />
                        {isToggleOn && <BtnMore text="더보기" />}
                    </div>
                </div>
            </ApiSubjectBx>
        </section>
    )
}

export default EquipmentByAlarm
