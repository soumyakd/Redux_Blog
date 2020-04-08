import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux' // npm install react-redux
import configureStore from './store/configuresStore'
import { startGetUsers } from './actions/usersAction'
import { startGetPosts } from './actions/postsAction'
import { startGetComments } from './actions/commentsAction'

const store = configureStore() 
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

// handle page reloads 
store.dispatch(startGetUsers())
store.dispatch(startGetPosts())
store.dispatch(startGetComments())


const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root') )
