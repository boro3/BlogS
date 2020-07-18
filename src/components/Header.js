import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetShowPosts , resetMainCord,resetSearchCord } from './../actions/PostsAction'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            btnTop:null
        }
        this.handleScroll = this.handleScroll.bind(this);
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
    
      handleScroll() {
        if (document.documentElement.scrollTop > 700) {
         this.setState({
             btnTop:'btnTop'
         })
        } else {
            this.setState({
                btnTop:null
            })
        }
      }

      btnTopHandler=()=>{
        window.scrollTo({
            top: 200,
            behavior: 'smooth'
        })
      }

    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <nav className="stroke">
                        <ul >
                            <Link to={'/'}  >
                                <li className="logo" onClick={()=>{this.props.resetShowPosts();this.props.resetMainCord()}}>SimpleBlog</li>
                            </Link>
                            <Link to={'/'}  ><li onClick={()=>{this.props.resetShowPosts();this.props.resetMainCord()}}>Home</li> </Link>
                            <Link to={'/contact'} > <li>About</li></Link>
                            <Link to={'/search'} > <li  onClick={()=>{this.props.resetSearchCord()}}>Search</li> </Link>
                            <Link to={'/make-post'} > <li>Post</li>   </Link>
                        </ul>
                    </nav>
                </div>
                <button id='myBtn' className={this.state.btnTop} onClick={this.btnTopHandler} title='Go Back Top' ><i className="fas fa-arrow-up"></i></button>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetShowPosts: () => {
            dispatch(resetShowPosts())
        },
        resetMainCord:()=>{
            dispatch(resetMainCord())
        },
        resetSearchCord:()=>{
            dispatch(resetSearchCord())
        }
    }
}

export default connect(null, mapDispatchToProps)(Header)
