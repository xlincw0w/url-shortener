import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { BiUnlink } from 'react-icons/bi'
import axios from 'axios'
import { constants } from '../../constants'
import isUrl from 'is-url'
import { toast } from 'react-toastify'

const ShortenInput = () => {
    const [long_url, SetLong] = useState('')
    const [short_url, SetShort] = useState(null)

    const handleShorten = async () => {
        if (isUrl(long_url)) {
            const res = await axios.post(constants.url + '/urls', {
                long_url,
            })
            console.log(res)

            if (res?.data?.added) {
                SetShort(res.data.row.short_url)
                toast.success('Your short URL has been created.')
            } else {
                toast.error('Internal server error please try later.')
            }
        } else {
            SetShort(null)
            toast.error('Make sure you type a correct url.')
        }
    }

    return (
        <div>
            <div className='flex justify-center'>
                <input
                    className='px-3 py-2 shadow border border-r-4 w-1/2'
                    onChange={(e) => {
                        SetLong(e.target.value)
                    }}
                    placeholder='Link to shorten'
                />
                <Button onClick={handleShorten} variant='contained' color='primary'>
                    <p className='font-OpenSans'>Shorten</p>
                    <BiUnlink size={30} style={{ marginLeft: '1rem' }} />
                </Button>
            </div>

            <div className='text-center mt-3 text-gray-600'>{short_url && <p>{'https://' + window.location.hostname + '/' + short_url}</p>}</div>
        </div>
    )
}

export default ShortenInput
