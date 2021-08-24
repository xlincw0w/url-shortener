import React, { useState } from 'react'
import yzrIcon from '../../Assets/Images/YRzone.png'
import { Button } from '@material-ui/core'
import { AiOutlineLogin } from 'react-icons/ai'
import { HiOutlineLogin } from 'react-icons/hi'
import { constants } from '../../constants'
import { toast } from 'react-toastify'
import firebase from 'firebase'

import { FirebaseAuthConsumer } from '@react-firebase/auth'

import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()

    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')

    const handleLogin = () => {
        let valid_data = { valid: true, err: null, msg: null }

        if (password.length < 8) valid_data = { valid: false, err: 'password_length_under_8', msg: 'Invalid email / password combination' }
        if (!constants.email_rg.test(email) || email.length === 0) valid_data = { valid: false, err: 'invalid_email', msg: 'Invalid email' }

        if (valid_data.valid) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((userCred) => {
                    toast.success('Succesfully logged in.')
                    history.push('/')
                })
                .catch((err) => {
                    console.log(err)
                    toast.error(err.message)
                })
        } else {
            toast.warn(valid_data.msg)
            console.log(valid_data.err)
        }
    }

    return (
        <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {
                console.log('Login', user?.email)
                if (isSignedIn) {
                    history.push('/')
                } else {
                    return (
                        <div>
                            <div className='text-center mt-10'>
                                <p className='text-gray-600 text-3xl'>Loggin into YRzone</p>
                            </div>
                            <div className='flex justify-center'>
                                <img className='w-40 h-28' src={yzrIcon} />
                            </div>
                            <div className=''>
                                <input
                                    onChange={(e) => {
                                        SetEmail(e.target.value)
                                    }}
                                    className='mx-auto my-5 block px-3 py-3 border border-2 rounded shadow xl:w-1/3 '
                                    placeholder='email'
                                />
                                <input
                                    onChange={(e) => {
                                        SetPassword(e.target.value)
                                    }}
                                    className='mx-auto my-5 block px-3 py-3 border border-2 rounded shadow xl:w-1/3 '
                                    type='password'
                                    placeholder='password'
                                />
                            </div>
                            <div className='flex justify-center'>
                                <Button
                                    onClick={() => {
                                        history.push('/')
                                    }}
                                    variant='contained'
                                    color='secondary'
                                    style={{ marginLeft: '0.3rem', marginRight: '0.3rem' }}>
                                    <HiOutlineLogin size={30} style={{ marginRight: '1rem' }} />
                                    <p className='font-OpenSans'>Back</p>
                                </Button>
                                <Button onClick={handleLogin} variant='contained' color='primary' style={{ marginLeft: '0.3rem', marginRight: '0.3rem' }}>
                                    <p className='font-OpenSans'>Login</p>
                                    <AiOutlineLogin size={30} style={{ marginLeft: '1rem' }} />
                                </Button>
                            </div>
                        </div>
                    )
                }
            }}
        </FirebaseAuthConsumer>
    )
}

export default Login
