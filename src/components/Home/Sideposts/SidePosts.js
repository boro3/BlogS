import React from 'react'
import AboutMeSide from './AboutMeSide'
import PopularPostsSide from './PopularPostsSide'
import SocialSide from './SocialSide'

export default function SidePosts(props) {
    return (
        <div>
           {props.showAbout && <AboutMeSide/>}
            <PopularPostsSide/>
            <SocialSide/>
        </div>
    )
}
