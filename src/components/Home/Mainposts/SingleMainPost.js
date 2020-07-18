import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleMainPost(props) {
    return (        
        <React.Fragment>
            <div className="card  box-sh">
                <h2 className='title'>{props.post.title}</h2>
                <div className="card-post-info"><span className="user" title='Posted by'>
                    <i className="fas fa-user"></i> {props.post.name}</span>
                    <span className="post-date"><i className="fas fa-clock"></i> {props.post.date}</span>
                </div>
                <Link to={`/posts/${props.post.id}`} >
                <div className="post-img">
                    <img className={"img"} src={props.post.imgUrl} alt='Not avaiable' />
                </div>
                </Link>
                <div className='main-text'>
                    <p>{(props.post.post).substring(0,250)}  . . .</p>
                </div>
                <Link to={`/posts/${props.post.id}`} >
                    <div className="button">
                        <div className="user main-button">Read More</div>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    )
}
