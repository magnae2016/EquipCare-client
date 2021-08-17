import React, { Fragment } from 'react'
import ApiSubjectBx from '@/components/UI/molecules/apiSubjectBx'
import LineGraphBox from '@/components/UI/molecules/lineGraphBox'

function AlarmByDate(params) {
    return (
        <section className="sc cs">
            <div className="sc cs_voting_rate"></div>
            <ApiSubjectBx title="날짜별 알람 현황">
                <div className="detail_box">
                    <LineGraphBox />
                </div>
            </ApiSubjectBx>
        </section>
    )
}

export default AlarmByDate
