import React from 'react'
import {connect} from 'react-redux'
import {getSinglePost} from './../../actions/PostsAction'

class ShowSinglePost extends React.Component{

    componentDidMount(){
        this.props.getPost(parseInt(this.props.postId) );
    }
    

    render() {
        console.log(this.props)
        return (
           
            <React.Fragment>
                <div className="card  box-sh">
                    <h2 className='title'>{this.props.post.title}</h2>
                    <div className="single-post-img">
                        <img className="img" src={this.props.post.imgUrl} alt={'no img avaliable'} />
                    </div>

                    <div className="single-card-post-info"><span className="user" title='Posted by'>
                        <i className="fas fa-user"></i>  {this.props.post.name}</span>
                        <span className="post-date"><i className="fas fa-clock"></i>{this.props.post.date}</span>
                    </div>

                    <div className='single-main-text main-text'>
                        <p>{this.props.post.post}</p>
                    </div>

                        <div className="button">
                            <div className="user main-button" onClick={()=>this.props.history.goBack()}>Back</div>
                        </div>

                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        post:state.PostsReducer.singlePost
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getPost:(postid) => {
            dispatch(getSinglePost(postid))
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowSinglePost);
