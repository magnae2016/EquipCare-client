import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ApiSubjectBx from '@/components/UI/molecules/apiSubjectBx'
import LineGraphBox from '@/components/UI/molecules/lineGraphBox'

function AlarmByDate(params) {
    const [alarms, setAlarms] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('api/alarms')
            setAlarms(response.data)
        }
        fetchData()
    }, [])
    return (
        <section className="sc cs">
            <div className="sc cs_voting_rate"></div>
            <ApiSubjectBx title="날짜별 알람 현황">
                <div className="detail_box">
                    <LineGraphBox data={alarms} />
                </div>
            </ApiSubjectBx>
        </section>
    )
}

export default AlarmByDate
