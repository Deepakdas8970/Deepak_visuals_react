import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

const Contact = () => {
  return (
    <div className="contactUs container-fluid mb-5" id="contactUs">
      <div className="row">
        <div className="col">
          <form
            className="row g-3 text-white"
            method="POST"
            data-netlify="true"
            name="Myform"
            action="/success"
          >
            <div className="col-md-12 text-center contact">
              <h1 style={{marginBottom: '5%' }}>CONTACT ME</h1>
              <p style={{ opacity: 0.7 }}>
                Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
              </p>
            </div>
            <input
              type="hidden"
              name="subject"
              data-remove-prefix
              value="New Message From Deepak's visuals"
            />

            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                style={{ color: 'white' }}
                name="firstName"
                placeholder="Enter Your First Name..."
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                style={{ color: 'white' }}
                name="lastName"
                placeholder="Enter Your Last Name..."
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                style={{ color: 'white' }}
                required
                name="email"
                placeholder="Enter Your Email..."
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="mobileNo" className="form-label">Mobile No.</label>
              <input
                type="number"
                className="form-control"
                id="mobileNo"
                style={{ color: 'white' }}
                name="mobileNo"
                placeholder="Enter Your Mobile Number..."
              />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                placeholder="Type Your Message..."
                style={{ height: '80px', color: 'white' }}
                name="message"
              />
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="myButton px-4"
              
              >
                Send The Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
