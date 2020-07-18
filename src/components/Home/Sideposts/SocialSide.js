import React from 'react'

export default function SocialSide() {
    return (
        <React.Fragment>
            <div className="card box-sh">
                <h3 className='title'>Follow Me On</h3>
                <span className='social-icon'><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a></span>
                <span className='social-icon'><a href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a></span>
                <span className='social-icon'><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square"></i></a></span>
                <span className='social-icon'><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></span>
                <span className='social-icon'><a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a></span>                
            </div>
        </React.Fragment>
    )
}
