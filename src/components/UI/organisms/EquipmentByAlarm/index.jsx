import React from 'react'
import './index.css'
import ApiSubjectBx from '@/components/UI/molecules/apiSubjectBx'
import { Link } from 'react-router-dom'

function ListEmpty(params) {
    return (
        <div className="sggt_container">
            <div className="nx_suggest_recent_nothing">
                최근 검색어 내역이 없습니다.
                <br />
                <span className="kwd_dsc">설정이 초기화된다면</span>
            </div>
        </div>
    )
}

function EquipmentByAlarm({ keyword }) {
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
                                        알람 종류를 선택하세요.
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="district_scroll">
                        <ListEmpty />
                    </div>
                </div>
            </ApiSubjectBx>
        </section>
    )
}

export default EquipmentByAlarm
