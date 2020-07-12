import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'

class Nav extends Component {
    render(){
        return(
            <div>
                {this.props.location.pathname !=='/'
                ?(<nav>

                <h1>Nav</h1>
                    <Link to = '/dashboard'>Home</Link>
                    <Link to = '/new'>New Post</Link>
                    <Link to= '/'>Logout</Link>

                </nav>)
                : null }
                
                
            </div>
        )
    }
}
export default withRouter(Nav);