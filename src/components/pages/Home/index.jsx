import React from 'react'
import Header from '@/components/templates/Header'
import ShortcutsPagingPanel from '@/components/UI/organisms/shortcutsPagingPanel'
import MTBITimelineList from '@/components/UI/organisms/MTBITimelineList'
import AlarmByEquipment from '@/components/UI/organisms/AlarmByEquipment'
import AlarmByDate from '@/components/UI/organisms/AlarmByDate'
import EquipmentByAlarm from '@/components/UI/organisms/EquipmentByAlarm'

function Home() {
    function handleClickInput(params) {
        window.location.href = '/search'
    }

    return (
        <div>
            <Header onClickInput={handleClickInput}></Header>
            <ShortcutsPagingPanel />
            <MTBITimelineList />
            <AlarmByEquipment />
            <AlarmByDate />
            <EquipmentByAlarm />
        </div>
    )
}

export default Home
