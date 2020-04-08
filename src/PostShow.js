import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startGetUsers } from './actions/usersAction'
import {startGetComments} from './actions/commentsAction'

class PostShow extends React.Component {  
    componentDidMount() {
        this.props.dispatch(startGetUsers())
        this.props.dispatch(startGetComments())
    }

    render() {
        return (
            <div>
                {
                this.props.post ? (<div>
                <h1> USER NAME - {this.props.users.find(user => user.id === this.props.post.userId).name}</h1>
                <h2> TITLE - {this.props.post.title}</h2>
                <h3> BODY - {this.props.post.body} </h3><hr/>  
                <h2> COMMENTS </h2>
                <ul>
                {
                    this.props.comments.map(comment => {
                        return <li key = {comment.id}> {comment.body}  </li>
                    })
                }
                </ul> 
                </div> ) : (
                    <p> loading...</p>
                    )
               }
                <h3><Link to={`/users/${this.props.post.userId}`} >
                    More posts of author : {this.props.users.find(user => user.id === this.props.post.userId).name}</Link></h3>
            </div>
            )
        }
    }
    
const mapStateToProps = (state, props)=>{
    return {
        comments:state.comments.filter(comment=> comment.postId == props.match.params.id),
        post : state.posts.find(post=> post.id == props.match.params.id),
        users : state.users
    }
}
export default connect(mapStateToProps)(PostShow)

