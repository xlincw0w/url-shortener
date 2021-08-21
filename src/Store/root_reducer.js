import { createStore, combineReducers, applyMiddleware } from 'redux'

import { mainReducer } from './main_reducer'

export const store_instance = createStore(
    combineReducers({
        mainReducer,
    }),
    {},
    applyMiddleware()
)
