import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import ApiSubjectBx from '@/components/UI/molecules/apiSubjectBx'
import BarGraphBox from '@/components/UI/molecules/barGraphBox'
import TableBox from '@/components/UI/molecules/tableBox'

function AlarmByEquipment(params) {
    const [filter, setFilter] = useState(undefined)
    const [datas, setDatas] = useState([])
    const [count, setCount] = useState(0)
    const [updatedAt, setUpdatedAt] = useState(undefined)

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                ['api/equipment/alarms', filter].join('/')
            )
            const { last_update_time, count, datas } = response.data
            setUpdatedAt(last_update_time)
            setCount(count)
            setDatas(datas)
        }
        fetchData()
    }, [filter])

    function handleClickFilter(f) {
        setFilter(f)
    }

    return (
        <section id="list-item-2" className="sc cs">
            <div className="sc cs_voting_rate"></div>
            <ApiSubjectBx title="장비별 알람 현황">
                {datas.length > 0 && (
                    <Fragment>
                        <BarGraphBox
                            datas={datas}
                            count={count}
                            filter={filter}
                            onClick={handleClickFilter}
                        />
                        <TableBox datas={datas} filter={filter} />
                    </Fragment>
                )}
            </ApiSubjectBx>
        </section>
    )
}

export default AlarmByEquipment
