import React from 'react'
import img from './../../../assets/img/tie-690084_640.jpg'
import { Link } from 'react-router-dom'

export default function AboutMeSide() {
    return (
        <React.Fragment>
            <div className="card-about box-sh">
                <h2 className='title'>About Me</h2>
                <Link to={'/contact'} >
                    <div className="about-img">
                        <img className="img" src={img} alt={'no img avaliable'} />
                    </div>
                </Link>
                <p className="button">Some general info about me to know each other better.</p>
                <Link to={'/contact'} >
                    <div className="button">
                        <div className="user main-button">Read More</div>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    )
}
