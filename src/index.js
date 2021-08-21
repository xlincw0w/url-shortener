import React from 'react'
import reactDOM from 'react-dom'
import Main from './Layout/Main/main'
import { Provider } from 'react-redux'
import { store_instance } from './Store/root_reducer'

import './index.css'

const store = store_instance

reactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
)
