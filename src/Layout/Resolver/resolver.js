import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import { constants } from '../../constants'

import { toast } from 'react-toastify'

const Resolver = () => {
    const params = useParams()

    console.log('Resolving')

    useEffect(() => {
        axios
            .get(constants.url + '/resolve/' + params.short_url)
            .then((res) => {
                if (res.data) {
                    window.location.href = res.data.row.long_url
                } else {
                    toast.error("Error, that short link doesn't exist.")
                }
            })
            .catch((err) => {
                toast.error('Internal server error.')
            })
    }, [])

    return <div></div>
}

export default Resolver
