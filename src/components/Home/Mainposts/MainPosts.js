import React from 'react'
import SingleMainPost from './SingleMainPost'
import { connect } from 'react-redux'
import {setMainCord} from './../../../actions/PostsAction'




class MainPosts extends React.Component {

    componentDidMount() {
        window.scrollTo({
            top: this.props.mainPageCord,
            behavior: 'smooth'
        })
    } 

    scrollTop=()=>{
        window.scrollTo({
            top: this.props.mainPageCord,
            behavior: 'smooth'
        })
    }

    calculateCurPosts=()=>{
        let a;
        this.props.currentPage === 1 ? a = 0 : a= (this.props.currentPage -1) *5
        return a;
    }

    render() {
        return (
            <React.Fragment >
                <div onClick={()=> this.props.setMainCord(document.documentElement.scrollTop)}>
                {                    
                    this.props.posts.slice(this.calculateCurPosts(),this.props.currentPage*5).map(item => {
                        let a = { ...item }
                        return (                           
                            <SingleMainPost post={a} key={item.id} />                           
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.PostsReducer.posts,
        currentPage: state.PostsReducer.currentPage,
        mainPageCord:state.PostsReducer.mainPageCord
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMainCord:(cords)=>{
            dispatch(setMainCord(cords))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPosts)


