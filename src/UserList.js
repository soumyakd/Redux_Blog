import React from 'react'
import { connect } from 'react-redux'
import { startGetUsers } from './actions/usersAction'
import { startGetPosts} from './actions/postsAction'
// npm install axios 
import { Link } from 'react-router-dom'

class UsersList extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.dispatch(startGetUsers())
            this.props.dispatch(startGetPosts())
        }
    }
    
    render(){ 
        return (
            <div>
                <h1>Listing Users - {this.props.users.length} </h1>
                <ul>
                    {this.props.users.map(user => {
                        return <li key={user.id}><Link to={`/users/${user.id}`}> {user.name} </Link> </li>
                    })}
                </ul>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(UsersList)

