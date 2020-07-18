import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'

export default class Modal extends Component {

    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            content:''
        }
    }
   submitHandler= (event)=>{
       event.preventDefault();
       this.setState({
        name:'',
        email:'',
        content:''
    })
    
        emailjs
        .sendForm(
            'gmail',
            'template_nBOsaEfz_clone',
            '.modal-input-form',
            process.env.REACT_APP_APP_ID
            
        )
        .then(()=>{alert('Thank you for contacting! You will recive answer in shortest time notice.')})
        .catch(error=>alert('The message was not sent try again later.'))     
        
   }

    inputChangeHandler= (event) =>{

        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close-modal" onClick={()=>this.props.setOpen(false)}><i className="fas fa-window-close"></i></span>
                    <div className="modal-form">
                        <h1>Contact ME</h1>
                        <form onSubmit={(event)=>{this.submitHandler(event)}} className='modal-input-form'>
                            <input type="text" name="name" placeholder="Your Name"  onChange={this.inputChangeHandler}/>
                            <input type="email" name="email" placeholder="Email Address"  onChange={this.inputChangeHandler}/>
                            <textarea name="content" placeholder="Type your Message" onChange={this.inputChangeHandler}></textarea>
                            <input type="submit"  />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
