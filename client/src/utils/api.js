import React from 'react'
import axios from 'axios'


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

    deleteSearch: (id) => {
        
        return axios.post('/posts/delete/' + id)
    },
    
}