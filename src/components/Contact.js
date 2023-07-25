import React from 'react';

function Contact() {
    return (
        <div className="container py-5">
            <h1>Contact Me</h1>
            <form action="https://formspree.io/f/xaygnvko" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Enter your name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="_replyto" className="form-control" id="email" placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" className="form-control" id="message" rows="3" placeholder="Enter your message here"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
