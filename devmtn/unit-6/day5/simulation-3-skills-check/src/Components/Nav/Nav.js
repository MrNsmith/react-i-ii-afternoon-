import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import{connect} from 'react-redux'
import './Nav.css'

class Nav extends Component {
   

    render(){
        return(
            
            <div className= 'nav-bar'>
                {this.props.location.pathname !=='/'
                ?(<nav className='nav-links'>

                    <h1>{this.props.user.username}</h1>
                    <img src={this.props.user.profile_pic} alt={this.props.user.username}/>
                    <nav><Link to = '/dashboard'>Home</Link></nav> 
                    <nav><Link to = '/new'>New Post</Link></nav>
                    <nav><Link to= '/'>Logout</Link></nav>
               
                </nav>)
                : null }
                
            </div>
          
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default withRouter(connect(mapStateToProps)(Nav));