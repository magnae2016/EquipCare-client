import React from 'react'
import FormTotalSearch from '@/components/UI/organisms/sch'

function Header({ query, onChange, onClickClearInput, children }) {
    return (
        <header className="header">
            <FormTotalSearch
                query={query}
                onChange={onChange}
                onClickClearInput={onClickClearInput}
            />
            {children}
        </header>
    )
}

export default Header
