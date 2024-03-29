import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Alert } from 'antd';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bkktles', 'template_wmbs02s', form.current, 'SEPew3-wpXgGFyHkY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    function messageSent(){
        document.querySelector("#submit-alert").innerHTML = "Your message has been received!";
    };

    return (
        <div id="contact-container">
            <div id="contact">
                <div id="contact-header">CONTACT ME</div>
                <div id="contact-description">Feel free to reach out to me if you want to find out more!</div>
            </div>
            <div id="contact-form">
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" required/>
                        <label>Email</label>
                        <input type="email" name="user_email" required/>
                        <label>Subject</label>
                        <input type="subject" name="user_subject" required/>
                        <label>Message</label>
                        <textarea name="message" required/>
                        <input id="submit-button" type="submit" value="Send" onClick={ messageSent }/>
                    </form>
                </div>
                <div id="submit-alert">

                </div>
            </div>
        </div>
    );
}
 
export default Contact;