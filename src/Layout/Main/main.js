import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from '../Header/header'
import ShortenInput from '../ShortenInput/shortenInput'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Resolver from '../Resolver/resolver'

const Main = () => {
    const dispatch = useDispatch()
    // const state = useSelector((state) => state.mainReducer)

    useEffect(() => {}, [])

    return (
        <Router>
            <div className='min-h-screen bg-gradient-to-t from-gray-100 to-white w-auto font-OpenSans'>
                <Switch>
                    <Route path='/:short_url'>
                        <Resolver />
                    </Route>
                    <Route exact path='/'>
                        <Header />
                        <ShortenInput />
                    </Route>
                </Switch>
                <ToastContainer
                    position='bottom-center'
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
        </Router>
    )
}

export default Main
