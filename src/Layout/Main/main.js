import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

import Header, { ShortHeader } from '../Header/header'
import ShortenInput from '../ShortenInput/shortenInput'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import { FirebaseAuthProvider, FirebaseAuthConsumer } from '@react-firebase/auth'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Resolver from '../Resolver/resolver'
import Login from '../Login/login'
import Overview from '../Overview/overview'

const Main = () => {
    const dispatch = useDispatch()
    // const state = useSelector((state) => state.mainReducer)

    useEffect(() => {}, [])

    return (
        <Router>
            <div>
                <div className='min-h-screen bg-gradient-to-t from-gray-100 to-white w-auto font-OpenSans'>
                    <FirebaseAuthConsumer>
                        {({ isSignedIn, user, providerId }) => {
                            console.log(user?.email, providerId)
                            if (!user && !providerId) {
                                return (
                                    <Backdrop open={true}>
                                        <CircularProgress color='inherit' />
                                    </Backdrop>
                                )
                            }
                        }}
                    </FirebaseAuthConsumer>

                    <Switch>
                        <Route path='/overview'>
                            <ShortHeader />
                            <Overview />
                        </Route>
                        <Route exact path='/login'>
                            <Login />
                        </Route>
                        <Route path='/:short_url'>
                            <Resolver />
                        </Route>
                        <Route path='/'>
                            <Header />
                            <ShortenInput />
                        </Route>
                    </Switch>
                    <ToastContainer
                        position='top-right'
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </div>
        </Router>
    )
}

export default Main
