const initState = {
    user: undefined,
    post: undefined,
}

const GET_USER = 'GET_USER'
const SET_USER = 'SET_USER'

const GET_POST = 'GET_POST'
const SET_POST = 'SET_POST'

// export const updateConnectionStatus = (payload) => ({
//     type: GET_USER,
//     payload
// })

export function mainReducer(state = initState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: 'loading',
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }

        case GET_POST:
            return {
                ...state,
                post: 'loading',
            }
        case SET_POST:
            return {
                ...state,
                post: action.payload,
            }
    }

    return state
}
