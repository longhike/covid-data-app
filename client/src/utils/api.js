import React from 'react'


export default {
    runSearch: async (date) => {
        try {
            const search = await fetch("/api/covid?date=" + date)
            if (search.status !== 200) throw new Error("Unsuccesssful");

            const data = await search.json();
            return data
        } catch (error) {
            console.warn(error)
        }
    },
    
}