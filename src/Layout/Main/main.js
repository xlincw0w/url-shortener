import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from '../Header/header'
import ShortenInput from '../ShortenInput/shortenInput'

const Main = () => {
    const dispatch = useDispatch()
    // const state = useSelector((state) => state.mainReducer)

    useEffect(() => {}, [])

    return (
        <Router>
            <div className='min-h-screen bg-gradient-to-t from-gray-100 to-white w-auto font-OpenSans'>
                <Switch>
                    <Route path='/admin'>{/* <About /> */}</Route>
                    <Route path='/users'>{/* <Users /> */}</Route>
                    <Route path='/'>
                        <Header />
                        <ShortenInput />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Main
