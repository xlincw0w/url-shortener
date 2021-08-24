import React from 'react'
import { useHistory } from 'react-router-dom'
import yzrIcon from '../../Assets/Images/YRzone.png'
import urlShort from '../../Assets/Images/url-shortener-tools.png'
import { FirebaseAuthConsumer } from '@react-firebase/auth'

import firebase from 'firebase/app'

const ShortHeader = () => {
    return (
        <>
            <div className='grid grid-cols-2 lg:grid-cols-3 w-full h-32'>
                <div className='flex justify-start lg:justify-end'>
                    <img className='w-40 h-28' src={yzrIcon} />
                </div>

                <div className='hidden lg:block'>
                    <div className='mt-8'>
                        {/* <p className='inline-block text-gray-500 mx-5 cursor-pointer hover:text-gray-700 duration-300'>Why YZzone</p>
                        <p className='inline-block text-gray-500 mx-5 cursor-pointer hover:text-gray-700 duration-300'>Features</p>
                        <p className='inline-block text-gray-500 mx-5 cursor-pointer hover:text-gray-700 duration-300'>Pricing</p> */}
                    </div>
                </div>

                <FirebaseAuthConsumer>
                    {({ isSignedIn, user, providerId }) => {
                        if (isSignedIn) {
                            return (
                                <div className='flex justify-end lg:justify-center mt-8 mr-4'>
                                    <p
                                        onClick={() => {
                                            firebase.auth().signOut()
                                            history.push('/overview')
                                        }}
                                        className='inline-block text-gray-500 cursor-pointer hover:text-gray-700 duration-300 mx-2'>
                                        Overview
                                    </p>
                                    <p
                                        onClick={() => {
                                            firebase.auth().signOut()
                                            history.push('/')
                                        }}
                                        className='inline-block text-gray-500 cursor-pointer hover:text-gray-700 duration-300 mx-2'>
                                        Logout
                                    </p>
                                </div>
                            )
                        } else {
                            return (
                                <div className='flex justify-end lg:justify-center mt-8 mr-4'>
                                    <p
                                        onClick={() => {
                                            history.push('/login')
                                        }}
                                        className='inline-block text-gray-500 cursor-pointer hover:text-gray-700 duration-300'>
                                        Login
                                    </p>
                                </div>
                            )
                        }
                    }}
                </FirebaseAuthConsumer>
            </div>
        </>
    )
}

const Header = () => {
    const history = useHistory()

    return (
        <>
            <div className='grid grid-cols-2 lg:grid-cols-3 w-full h-32'>
                <div className='flex justify-start lg:justify-end'>
                    <img className='w-40 h-28' src={yzrIcon} />
                </div>

                <div className='hidden lg:block'>
                    <div className='mt-8'>
                        {/* <p className='inline-block text-gray-500 mx-5 cursor-pointer hover:text-gray-700 duration-300'>Why YZzone</p>
                        <p className='inline-block text-gray-500 mx-5 cursor-pointer hover:text-gray-700 duration-300'>Features</p>
                        <p className='inline-block text-gray-500 mx-5 cursor-pointer hover:text-gray-700 duration-300'>Pricing</p> */}
                    </div>
                </div>

                <FirebaseAuthConsumer>
                    {({ isSignedIn, user, providerId }) => {
                        if (isSignedIn) {
                            return (
                                <div className='flex justify-end lg:justify-center mt-8 mr-4'>
                                    <p
                                        onClick={() => {
                                            firebase.auth().signOut()
                                            history.push('/overview')
                                        }}
                                        className='inline-block text-gray-500 cursor-pointer hover:text-gray-700 duration-300 mx-2'>
                                        Overview
                                    </p>
                                    <p
                                        onClick={() => {
                                            firebase.auth().signOut()
                                            history.push('/')
                                        }}
                                        className='inline-block text-gray-500 cursor-pointer hover:text-gray-700 duration-300 mx-2'>
                                        Logout
                                    </p>
                                </div>
                            )
                        } else {
                            return (
                                <div className='flex justify-end lg:justify-center mt-8 mr-4'>
                                    <p
                                        onClick={() => {
                                            history.push('/login')
                                        }}
                                        className='inline-block text-gray-500 cursor-pointer hover:text-gray-700 duration-300'>
                                        Login
                                    </p>
                                </div>
                            )
                        }
                    }}
                </FirebaseAuthConsumer>
            </div>
            <div className='grid grid-cols-2 mb-10'>
                <div className='text-start ml-14 mt-5 lg:mt-16 2xl:mt-28'>
                    <p className='text-gray-700 text-2xl lg:text-5xl'>Shorten your link and share it with ease</p>
                    <p className='text-gray-500 hidden lg:block'>
                        With URL shorteners, any long and unwieldy website address can be reduced to just a few characters in the click of a button
                    </p>
                </div>
                <div className='flex justify-center'>
                    <img className='w-128 h-80 hidden lg:block' src={urlShort} />
                </div>
            </div>
        </>
    )
}

export { ShortHeader }
export default Header
