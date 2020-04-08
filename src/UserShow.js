import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGetUsers } from './actions/usersAction'
import { startGetPosts } from './actions/postsAction'

class UserShow extends React.Component {
    componentDidMount() {
        if (this.props.posts.length === 0) {
            this.props.dispatch(startGetUsers())
            this.props.dispatch(startGetPosts())
        } 
    }

    render() {
        console.log('user',this.props.users)
        console.log('post',this.props.posts)
        return (
            <div>
                {
                    this.props.user ? ( <div> 
                        <h1>USER NAME - {this.props.user.name}</h1>
                        <h2>POST WRITTEN BY USER</h2>
                        <ul>
                        {
                            this.props.posts.map(post => {
                                return <li key = {post.id}> <Link to = {`/posts/${post.id}`}>{post.title}</Link> </li>
                            })
                        }
                        </ul>
                    </div> ) : (
                        <p> loading...</p>
                    )
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => user.id == props.match.params.id),
        posts: state.posts.filter(post => post.userId == props.match.params.id)
    }
}
export default connect(mapStateToProps)(UserShow)