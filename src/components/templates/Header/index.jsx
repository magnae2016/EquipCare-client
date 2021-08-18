import React from 'react'
import FormTotalSearch from '@/components/UI/organisms/sch'

function Header({
    query = '',
    onChange = () => false,
    onClickClearInput = () => false,
    onClickInput = () => false,
    children,
}) {
    return (
        <header className="header">
            <FormTotalSearch
                query={query}
                onChange={onChange}
                onClickClearInput={onClickClearInput}
                onClickInput={onClickInput}
            />
            {children}
        </header>
    )
}

export default Header
