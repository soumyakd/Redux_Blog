import React from 'react'
import { connect } from 'react-redux'
// npm install axios 
import { Link } from 'react-router-dom'
import { startGetComments } from './actions/commentsAction'

class CommentsList extends React.Component {
    componentDidMount() {
        if (this.props.comments.length === 0) {
            this.props.dispatch(startGetComments())
        }
    }
    
    render(){ 
        return (
            <div>
                <h1>Listing Comments - {this.props.comments.length} </h1>
                <ul>
                    {this.props.comments.map(comment => {
                        return <li key={comment.id}> <Link to ={`/comments/${comment.id}`}>{comment.body}</Link> </li>
                    })}
                </ul>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}
export default connect(mapStateToProps)(CommentsList)

