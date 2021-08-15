import React from 'react'
import Header from '@/components/templates/Header'
import ShortcutsPagingPanel from '@/components/UI/organisms/shortcutsPagingPanel'
import MTBITimelineList from '@/components/UI/organisms/MTBITimelineList'

function Home() {
    return (
        <div>
            <Header></Header>
            <ShortcutsPagingPanel />
            <MTBITimelineList />
        </div>
    )
}

export default Home
