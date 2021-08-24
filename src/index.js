import React from 'react'
import reactDOM from 'react-dom'
import Main from './Layout/Main/main'
import { Provider } from 'react-redux'
import { store_instance } from './Store/root_reducer'

import { FirebaseAuthProvider, FirebaseAuthConsumer } from '@react-firebase/auth'
import firebaseConfig from './firebase'
import firebase from 'firebase/app'

import './index.css'

const store = store_instance

reactDOM.render(
    <Provider store={store}>
        <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
            <Main />
        </FirebaseAuthProvider>
    </Provider>,
    document.getElementById('root')
)
