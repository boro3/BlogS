import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'

export default class Modal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            content: ''
        }
    }
    submitHandler = (event)=> {
        event.preventDefault();
        emailjs
            .sendForm(
                'gmail',
                'template_nBOsaEfz_clone',
                '.modal-input-form',
                process.env.REACT_APP_APP_ID
            )
            .then(() => { alert('Thank you for contacting! You will recive answer in shortest time notice.') ; this.props.setOpen(false) })
            .catch(error => {alert('The message was not sent try again later.' + error);this.props.setOpen(false)})

        this.setState({
            name: '',
            email: '',
            content: ''
        })
    }

    inputChangeHandler = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close-modal" onClick={() => this.props.setOpen(false)}><i className="fas fa-window-close"></i></span>
                    <div className="modal-form">
                        <h1>Contact ME</h1>
                        <form onSubmit={(event) => { this.submitHandler(event) }} className='modal-input-form'>
                            <input type="text" name="name" placeholder="Your Name" onChange={this.inputChangeHandler} value={this.state.name} />
                            <input type="email" name="email" placeholder="Email Address" onChange={this.inputChangeHandler} value={this.state.email} />
                            <textarea name="content" placeholder="Type your Message" onChange={this.inputChangeHandler} value={this.state.content}></textarea>
                            <input type="submit"></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
