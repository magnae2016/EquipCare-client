import React, { useEffect, useState } from 'react'
import Search from '@/components/templates/Search'
import axios from 'axios'

function SelectTab(params) {
    const [query, setQuery] = useState('')
    const [suggest, setSuggest] = useState([])

    const handleChangeQuery = (value) => {
        setQuery(value)
    }

    const handleClickClearInput = () => {
        setQuery('')
    }

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/api/metadata/alarms')
            setSuggest(response.data)
        }
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

export default SelectTab
