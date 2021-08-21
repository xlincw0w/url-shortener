import React from 'react'
import yzrIcon from '../../Assets/Images/YRzone.png'
import urlShort from '../../Assets/Images/url-shortener-tools.png'

const Header = () => {
    return (
        <>
            <div className='grid grid-cols-2 lg:grid-cols-3 w-full h-32'>
                <div className='flex justify-start lg:justify-end'>
                    <img className='w-40 h-32' src={yzrIcon} />
                </div>

                <div className='hidden lg:block'>
                    <div className='mt-8'>
                        <p className='inline-block text-gray-500 mx-5 cursor-pointer hover:text-gray-700 duration-300'>Why YZzone</p>
                        <p className='inline-block text-gray-500 mx-5 cursor-pointer hover:text-gray-700 duration-300'>Features</p>
                        <p className='inline-block text-gray-500 mx-5 cursor-pointer hover:text-gray-700 duration-300'>Pricing</p>
                    </div>
                </div>

                <div className='flex justify-end lg:justify-center mt-8 mr-4'>
                    <p className='inline-block text-gray-500 cursor-pointer hover:text-gray-700 duration-300'>Login</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className='text-start ml-14 mt-10 lg:mt-28'>
                    <p className='text-gray-700 text-5xl'>Shorten your link and share it with ease</p>
                    <p className='text-gray-500'>With URL shorteners, any long and unwieldy website address can be reduced to just a few characters in the click of a button</p>
                </div>
                <div className='mt-10 flex justify-center'>
                    <img className='w-128 h-80' src={urlShort} />
                </div>
            </div>
        </>
    )
}

export default Header
