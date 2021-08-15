import React from 'react'
import queryString from 'query-string'
import Header from '@/components/templates/Header'
import SlideboxMenu from '@/components/UI/organisms/nav'

function Equipment({ location, match }) {
    const query = queryString.parse(location.search)
    const { q } = query
    return (
        <div>
            <Header>
                <SlideboxMenu />
            </Header>
        </div>
    )
}

export default Equipment
