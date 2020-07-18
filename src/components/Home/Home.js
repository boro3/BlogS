import React from 'react'
import MainPosts from './Mainposts/MainPosts'
import SidePosts from './Sideposts/SidePosts'
import BottomNav from './BottomNav'


export default class Home extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='fx fx-row fx-start'>
                    <div className='fx-2 col-container'>
                        <MainPosts />
                    </div>
                    <div className='fx-1 col-container'>
                        <SidePosts showAbout={true} />
                    </div>
                </div>
                <BottomNav />
            </div>
        )
    }
}
