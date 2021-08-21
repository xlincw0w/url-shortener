import React from 'react'
import { Button } from '@material-ui/core'
import { BiUnlink } from 'react-icons/bi'

const ShortenInput = () => {
    return (
        <div className='flex justify-center'>
            <input className='px-3 py-2 shadow border border-r-4 w-1/2' placeholder='Link to shorten' />
            <Button variant='contained' color='primary'>
                <p className='font-OpenSans'>Shorten</p>
                <BiUnlink size={30} style={{ marginLeft: '1rem' }} />
            </Button>
        </div>
    )
}

export default ShortenInput
