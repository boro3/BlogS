import React, { Component } from 'react'
import SingleMainPost from '../Home/Mainposts/SingleMainPost'
import { connect } from 'react-redux'



class SearchPosts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchStr: ''
        }
    }

    inuputHandler = (event) => {
        this.setState({
            searchStr: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()

    }

    render() {
        return (
            <React.Fragment >
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="search-term" placeholder="What are you looking for?" onChange={this.inuputHandler} value={this.state.searchStr} />
                        <span>
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>

                <div onClick={()=>this.props.setSearchCord(document.documentElement.scrollTop)}>
                    {
                        this.props.posts.map(item => {
                            let a = { ...item }
                            if (a.title.toUpperCase().search(this.state.searchStr.toUpperCase()) > -1) {
                                return (<SingleMainPost post={a} key={item.id} />)
                            } else
                                return null
                        })}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.PostsReducer.posts,

    }
}


export default connect(mapStateToProps, null)(SearchPosts)
