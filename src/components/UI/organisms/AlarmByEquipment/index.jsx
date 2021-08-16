import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import ApiSubjectBx from '@/components/UI/molecules/apiSubjectBx'
import BarGraphBox from '@/components/UI/molecules/barGraphBox'
import TableBox from '@/components/UI/molecules/tableBox'

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
            <ApiSubjectBx datas={datas} count={count} updatedAt={updatedAt}>
                {datas.length > 0 && (
                    <Fragment>
                        <BarGraphBox datas={datas} count={count} />
                        <TableBox datas={datas} />
                    </Fragment>
                )}
            </ApiSubjectBx>
        </section>
    )
}

export default AlarmByEquipment
