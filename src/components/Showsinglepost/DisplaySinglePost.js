import React , {useEffect} from 'react'
import SidePosts from '../Home/Sideposts/SidePosts'
import ShowSinglePost from './ShowSinglePost'



export default function DisplaySinglePost(props) {

    useEffect(() => {
        window.scrollTo({
            top:370,
            behavior: 'smooth'
        })
      }, [])

      console.log(props)
    return (
            <div className='container'>
                <div className='fx fx-row fx-start'>
                    <div className='fx-2 col-container'>
                        <ShowSinglePost postId={props.match.params.postId} history={props.history}/>
                    </div>
                    <div className='fx-1 col-container'>
                        <SidePosts showAbout={false}/>
                    </div>
                </div>
            </div>
    )
}
