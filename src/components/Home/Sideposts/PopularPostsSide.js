import React from 'react'
import SinglePopularPost from './SinglePopularPost'
import { connect } from 'react-redux'

class PopularPostsSide extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="card box-sh ">
                    <h3 className='title'>Popular Post</h3>
                    <div className="fx fx-col">
                        {this.props.posts.map(item => {
                            if (item.popular) {
                                return (<SinglePopularPost post={item} key={item.id} />)
                            } else {
                                return null
                            }
                        })}
                    </div>
                </div >
            </React.Fragment >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.PostsReducer.posts
    }
}

export default connect(mapStateToProps, null)(PopularPostsSide)
