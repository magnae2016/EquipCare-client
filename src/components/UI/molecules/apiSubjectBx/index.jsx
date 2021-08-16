import React from 'react'
import './index.css'
import ApiTitleArea from '@/components/UI/atoms/apiTitleArea'
import BarGraphBox from '@/components/UI/molecules/barGraphBox'
import TableBox from '@/components/UI/molecules/tableBox'

function ApiSubjectBx({ datas, count, updatedAt }) {
    return (
        <div className="api_subject_bx">
            <ApiTitleArea title="장비별 알람 현황" />
            <div className="num_statement">
                <BarGraphBox datas={datas} count={count} />
                <TableBox datas={datas} />
            </div>
        </div>
    )
}

export default ApiSubjectBx
