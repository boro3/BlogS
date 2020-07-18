import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOneToPosts, removeOneToPosts } from './../../actions/PostsAction'

class BottomNav extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="bottom-nav">
                    <div className='bottom-nav-btn'
                        onClick={
                            this.props.currentPage === 1 ? (event) => event.preventDefault()
                                :
                                () => {
                                    this.props.removeOneToPosts(); window.scrollTo({
                                        top: 200,
                                        behavior: 'smooth'
                                    })
                                }}>
                        <i className="fas fa-chevron-left"></i></div>
                    <div className='bottom-nav-btn'>{this.props.currentPage}</div>
                    <div className='bottom-nav-btn'>{this.props.numOfPages}</div>
                    <div className='bottom-nav-btn'
                        onClick={
                            this.props.currentPage === this.props.numOfPages ? (event) => event.preventDefault()
                                :
                                () => {
                                    this.props.addOneToPosts(); window.scrollTo({
                                        top: 200,
                                        behavior: 'smooth'
                                    })
                                }}>
                        <i className="fas fa-chevron-right"></i></div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.PostsReducer.currentPage,
        numOfPages: state.PostsReducer.numOfPages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOneToPosts: () => {
            dispatch(addOneToPosts())
        },
        removeOneToPosts: () => {
            dispatch(removeOneToPosts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav)
