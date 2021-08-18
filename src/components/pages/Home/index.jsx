import React, { useEffect } from 'react'
import Header from '@/components/templates/Header'
import ShortcutsPagingPanel from '@/components/UI/organisms/shortcutsPagingPanel'
import MTBITimelineList from '@/components/UI/organisms/MTBITimelineList'
import AlarmByEquipment from '@/components/UI/organisms/AlarmByEquipment'
import AlarmByDate from '@/components/UI/organisms/AlarmByDate'
import EquipmentByAlarm from '@/components/UI/organisms/EquipmentByAlarm'

function Home(props) {
    const { state = {} } = props.location
    const { keyword } = state

    function handleClickInput(params) {
        window.location.href = '/search'
    }

    useEffect(() => {
        setTimeout(() => {
            const { hash } = props.location
            const id = hash.replace('#', '')
            const element = document.getElementById(id)
            if (element) element.scrollIntoView()
        }, 1000)
    }, [])

    return (
        <div>
            <Header onClickInput={handleClickInput}></Header>
            <ShortcutsPagingPanel />
            <MTBITimelineList />
            <AlarmByEquipment />
            <AlarmByDate />
            <EquipmentByAlarm keyword={keyword} />
        </div>
    )
}

export default Home
