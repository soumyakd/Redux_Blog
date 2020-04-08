import React from 'react'
import { connect } from 'react-redux'
class CommentShow extends React.Component {
    
    render() {
        return (
            <div>
                {
                    this.props.comment ? ( <div> 
                        <h2>Comment of User- {this.props.match.params.id}</h2>
                        <p> {this.props.comment.body} </p> 
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
        comment: state.comments.find(comment => comment.id == props.match.params.id)
    }
}
export default connect(mapStateToProps)(CommentShow)