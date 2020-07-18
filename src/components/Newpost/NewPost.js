import React, { Component } from 'react'
import {addNewPost} from '../../actions/PostsAction'
import {connect} from 'react-redux'

class NewPost extends Component {


    componentDidMount() {
            window.scrollTo({
              top: 200,
              left: 0,
              behavior: "smooth"
            })
    }

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            title: "",
            post: "",
            date: '',
            imgUrl: '',
            id:0
        }
    }

    inputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    submitHandler = (event) => {
        event.preventDefault()
        let a;
        a = {
            id:parseInt(this.props.id+1),
            name: this.state.name,
            date: this.getCurrentDate(),
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            post: this.state.post      
        }
            this.props.addNewPost(a) 
        this.setState({
            name: "",
            title: "",
            post: "",
            imgUrl: '',
            date:'',
            id:0
        },()=>{a=undefined})
       
        
    }

    getCurrentDate = () => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${date} ${month < 10 ? `0${month}` : `${month}`} ${year}`
    }


    render() {
        return (
            <React.Fragment>
                <div className="container m-r">
                    <div className='card input-card'>
                        <h2 className="title">Make New Post</h2>
                        <form>
                            <div className="input-fields">
                                <div className="single-input">
                                    <label className="user">Name</label>
                                    <input type="text" id="fname" name="name" className={'input user'}
                                        value={this.state.name} placeholder={'Enter Your Name'} onChange={this.inputChangeHandler} />
                                </div>

                                <div className="single-input">
                                    <label className='user'>Title</label>
                                    <input type="text" id="title" name="title" className={'input user'}
                                        value={this.state.title} placeholder={'Enter Post Title'} onChange={this.inputChangeHandler} />
                                </div>

                                <div className="single-input">
                                    <label className='user'>Image</label>
                                    <input type="text" id="imgUrl" name="imgUrl" className={'input user'} 
                                        value={this.state.imgUrl} placeholder={'Enter Image URL'} onChange={this.inputChangeHandler} />
                                </div>

                                <div className="single-input">
                                    <label className="user">Post</label>
                                    <textarea type="text" id="post" name="post" className={'input user'} 
                                        value={this.state.post} placeholder={'Enter Your Post Here'} onChange={this.inputChangeHandler} />
                                </div>
                            </div>
                            <button type="submit" value="Submit" className="user main-button newpostbtn" onClick={this.submitHandler} >Post</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        id:state.PostsReducer.posts.length
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        addNewPost:(post)=>{
            dispatch(addNewPost(post))
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(NewPost)
