import React from 'react'
import './index.css'
import ApiTitleArea from '@/components/UI/atoms/apiTitleArea'

function ApiSubjectBx(props) {
    return (
        <div className="api_subject_bx">
            <ApiTitleArea title="장비별 알람 현황" />
            <div className="num_statement">{props.children}</div>
        </div>
    )
}

export default ApiSubjectBx
