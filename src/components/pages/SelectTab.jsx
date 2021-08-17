import React, { useEffect, useState } from 'react'
import Search from '@/components/templates/Search'
import axios from 'axios'

function SelectTab(params) {
    const [suggest, setSuggest] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/api/metadata/alarms')
            setSuggest(response.data)
        }
        fetchData()
    }, [])
    return (
        <div>
            <Search suggest={suggest} />
        </div>
    )
}

export default SelectTab
