import React from 'react'
import FormTotalSearch from '@/components/UI/organisms/sch'

function Header(props) {
    return (
        <header className="header">
            <FormTotalSearch />
            {props.children}
        </header>
    )
}

export default Header
