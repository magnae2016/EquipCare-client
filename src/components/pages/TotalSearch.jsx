import React, { useEffect, useState } from 'react'
import Search from '@/components/templates/Search'
import axios from 'axios'

function TotalSearch(params) {
    const [query, setQuery] = useState('')
    const [suggest, setSuggest] = useState([])

    const handleChangeQuery = (value) => {
        setQuery(value)
    }

    const handleClickClearInput = () => {
        setQuery('')
    }

    useEffect(() => {
        async function fetchData() {}
        fetchData()
    }, [])
    return (
        <div>
            <Search
                query={query}
                onChange={handleChangeQuery}
                onClickClearInput={handleClickClearInput}
                suggest={suggest}
            />
        </div>
    )
}

export default TotalSearch
