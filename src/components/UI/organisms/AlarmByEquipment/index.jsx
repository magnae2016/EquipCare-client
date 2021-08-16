import React, { useEffect, useState } from 'react'
import ApiSubjectBx from '@/components/UI/molecules/apiSubjectBx'
import axios from 'axios'

function AlarmByEquipment(params) {
    const [datas, setDatas] = useState([])
    const [count, setCount] = useState(0)
    const [updatedAt, setUpdatedAt] = useState(undefined)

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('api/equipment/alarms')
            const { last_update_time, count, datas } = response.data
            setUpdatedAt(last_update_time)
            setCount(count)
            setDatas(datas)
        }
        fetchData()
    }, [])

    return (
        <section className="sc cs">
            <div className="sc cs_voting_rate"></div>
            <ApiSubjectBx
                datas={datas}
                count={count}
                updatedAt={updatedAt}
            ></ApiSubjectBx>
        </section>
    )
}

export default AlarmByEquipment
