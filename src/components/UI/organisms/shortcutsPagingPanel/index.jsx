import React from 'react'
import './index.css'
import Shortcut from '@/components/UI/molecules/shortcut'

function ShortcutsPagingPanel() {
    const ce_index_list = [
        {
            prefix: '최신 알람',
            title: 'MTBI 현황',
            selected: true,
            hash: '#list-item-1',
        },
        {
            prefix: '장비별',
            title: '알람 현황',
            selected: false,
            hash: '#',
        },
        {
            prefix: '날짜별',
            title: '알람 현황',
            selected: false,
            hash: '#',
        },
        {
            prefix: '알람별',
            title: '장비 현황',
            selected: false,
            hash: '#',
        },
        {
            prefix: '장비 알람',
            title: 'Summary',
            selected: false,
            hash: '#',
        },
        {
            prefix: '액션별',
            title: '소요시간 현황',
            selected: false,
            hash: '#',
        },
    ]

    return (
        <div className="ce_index">
            <div>
                <div className="ce_index_wrap">
                    <ul className="ce_index_list">
                        {ce_index_list.map((element, index) => (
                            <Shortcut
                                key={index}
                                prefix={element.prefix}
                                title={element.title}
                                selected={element.selected}
                                hash={element.hash}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShortcutsPagingPanel
