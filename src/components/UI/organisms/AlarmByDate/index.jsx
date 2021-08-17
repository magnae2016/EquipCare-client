import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ApiSubjectBx from '@/components/UI/molecules/apiSubjectBx'
import LineGraphBox from '@/components/UI/molecules/lineGraphBox'
import ButtonArea from '@/components/UI/molecules/buttonArea'
import BtnMore from '@/components/UI/atoms/btnMore'

function AlarmByDate(params) {
    const values = ['', 'error', 'down']
    const names = ['알람', 'ERROR', 'DOWN']
    const [filter, setFilter] = useState('')
    const [alarms, setAlarms] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(['api/alarms', filter].join('/'))
            setAlarms(response.data)
        }
        fetchData()
    }, [filter])

    function handleClickFilter(f) {
        setFilter(f)
    }

    return (
        <section className="sc cs">
            <div className="sc cs_voting_rate"></div>
            <ApiSubjectBx title="날짜별 알람 현황">
                <div className="detail_box">
                    <ButtonArea
                        names={names}
                        values={values}
                        onClick={handleClickFilter}
                    />
                    <LineGraphBox data={alarms} filter={filter} />
                    <div style={{ marginTop: 12 }}>
                        <BtnMore text="더보기" />
                    </div>
                </div>
            </ApiSubjectBx>
        </section>
    )
}

export default AlarmByDate
