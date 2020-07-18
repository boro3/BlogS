import React, {useEffect,useState} from 'react'
import img from './../../assets/img/tie-690084_640.jpg'
import SocialSide from './../Home/Sideposts/SocialSide'
import Modal from './Modal'

export default function Contact() {

    const [open, setOpen]= useState(false)

    useEffect(() => {
        window.scrollTo({
            top:200,
            behavior: 'smooth'
        })
      }, [])

    return (
        <div className='container'>
           { open && <Modal setOpen={setOpen} />}
            <div className='fx fx-row fx-start'>
                <div className='fx-1 col-container contact-img-cont'>
                    <div className="contact-img">
                        <img className="img" src={img} alt={'nopicture avaiable'} />
                    </div>
                    <div className="contact-button" onClick={()=>setOpen(!open)}>
                        <div className="user main-button contact-btn">Send Message</div>
                    </div>
                    <SocialSide />
                </div>
                <div className='fx-2 col-container contact-border'>
                    <div className='whole-info'>
                        <h3 className="title">Contact Information</h3>
                        <div >
                            <div className="single-line-info">
                                <div className='line-info'>
                                    <span>E-mail:</span>
                                </div>
                                <div className='line-info'>
                                    <span className="second-span">borosoposki@yahoo.com</span>
                                </div>
                            </div>
                            <div className="single-line-info">
                                <div className='line-info'>
                                    <span>Phone:</span>
                                </div>
                                <div className='line-info'>
                                    <span className="second-span">078-666-789654-656</span>
                                </div>
                            </div>
                        </div>


                        <div>
                            <h3 className="title">Addres</h3>
                            <div >
                                <div className="single-line-info">
                                    <div className='line-info'>
                                        <span>Country:</span>
                                    </div>
                                    <div className='line-info'>
                                        <span className="second-span">Macedonia</span>
                                    </div>
                                </div>
                                <div className="single-line-info">
                                    <div className='line-info'>
                                        <span>City:</span>
                                    </div>
                                    <div className='line-info'>
                                        <span className="second-span">Ohrid</span>
                                    </div>
                                </div>
                                <div className="single-line-info">
                                    <div className='line-info'>
                                        <span>Street:</span>
                                    </div>
                                    <div className='line-info'>
                                        <span className="second-span">Ulica Ulica</span>
                                    </div>
                                </div>
                                <div className="single-line-info">
                                    <div className='line-info'>
                                        <span>Number:</span>
                                    </div>
                                    <div className='line-info'>
                                        <span className="second-span">141</span>
                                    </div>
                                </div>
                                <div className="single-line-info">
                                    <div className='line-info'>
                                        <span>Coordinates:</span>
                                    </div>
                                    <div className='line-info'>
                                        <span className="second-span">9° 28′ 44″ S, 147° 8′ 58″ E</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="title">General Information</h3>
                            <div >
                                <div className="single-line-info">
                                    <div className='line-info'>
                                        <span>Birthday:</span>
                                    </div>
                                    <div className='line-info'>
                                        <span className="second-span">10 May</span>
                                    </div>
                                </div>
                                <div className="single-line-info">
                                    <div className='line-info'>
                                        <span>Department:</span>
                                    </div>
                                    <div className='line-info'>
                                        <span className="second-span">Research</span>
                                    </div>
                                </div>
                                <div className="single-line-info">
                                    <div className='line-info'>
                                        <span>Supervisor:</span>
                                    </div>
                                    <div className='line-info'>
                                        <span className="second-span">Jon Doe</span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-line-info">
                                <div className='line-info'>
                                    <span>Subordinate:</span>
                                </div>
                                <div className='line-info'>
                                    <span className="second-span">Jane Doe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
