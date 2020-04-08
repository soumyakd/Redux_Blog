import React from 'react'
import UserList from './UserList'
import UserShow from './UserShow'
import PostList from './PostList'
import PostShow from './PostShow'
import CommentsList from './CommentList'
import CommentShow from './CommentShow'

// npm install react-router-dom
import { BrowserRouter, Route, Link } from 'react-router-dom'

function App(props){
    return(
        <BrowserRouter>
            <div>
                  
                <Link to = '/userlist'> Users |</Link>   
                <Link to = '/postlist'> Posts |</Link>   
                <Link to = '/commentlist'> Comments </Link>   
                
                <Route path = '/userlist' component = {UserList} exact = {true}/>
                <Route path = '/users/:id' component = {UserShow} exact = {true}/>
                <Route path = '/postlist' component = {PostList} exact = {true}/>
                <Route path='/posts/:id' component={PostShow}/>
                <Route path = '/commentlist' component = {CommentsList} exact = {true}/>
                <Route path='/comments/:id' component={CommentShow}/>
            </div>
        </BrowserRouter>    
    )
}

export default App
