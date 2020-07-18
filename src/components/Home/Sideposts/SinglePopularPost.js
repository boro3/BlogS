import React from 'react'
import img from './../../../assets/img/fantasy-5316369_960_720.jpg'
import { Link } from 'react-router-dom'

export default function SinglePopularPost(props) {
    return (
        <React.Fragment>
                <div className="popular-post fx-left">
                    <div className="popular-img">
                      <Link to={`/posts/${props.post.id}`}> <img src={props.post.imgUrl} className="img" alt={'no img avaliable'} /></Link> 
                    </div>
                    <Link to={`/posts/${props.post.id}`}>  <div className='popular-title'>
                        <span className="user">{props.post.title}</span>
                    </div></Link> 
                </div>
        </React.Fragment>
    )
}
