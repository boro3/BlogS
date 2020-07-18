import React, { Component } from 'react'
import SidePosts from './../Home/Sideposts/SidePosts'
import SearchPosts from './SearchPosts'
import {connect} from 'react-redux'
import {setSearchCord} from './../../actions/PostsAction'

class Search extends Component {

    componentDidMount(){
        window.scrollTo({
            top: this.props.searchCord,
            behavior: 'smooth'
        })
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='fx fx-row fx-star'>
                        <div className='search-container fx-2 col-container'>
                            <SearchPosts setSearchCord={this.props.setSearchCord} />
                        </div>
                        <div className='fx-1 col-container'>
                            <SidePosts showAbout={true} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps= (state)=>{
    return{
        searchCord:state.PostsReducer.searchCord
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setSearchCord:(cords)=>{
            dispatch(setSearchCord(cords))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)
