import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  //destructure formData
  const {name,email,message} = formData;

  const handleChangeInput = (e) => {
    const {name,value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err) => console.log(err));
  }
  return (
    <>
    <h2 className = "head-text">Chat with me!</h2>
    <div className = "app__footer-cards">
      <div className = "app__footer-card">
       <img src = {images.email} alt = "email" />
       <a href = "mailto:davidhu52497@gmail.com" className = "p-text"> Email Me! </a>
      </div>
      <div className = "app__footer-card">
       <img src = {images.mobile} alt = "mobile" />
       <a href = "tel: +1 (646) 355-9527" className = "p-text"> Call Me! </a>
      </div>
    </div>
    {!isFormSubmitted ?
    <div className = "app__footer-form app__flex">
    <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea className = "p-text" 
            placeholder = "Your message"
            value = {message}
            name = "message"
            onChange = {handleChangeInput}/>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
    </div>
    : 
    <div>
      <h3 className = "head-text"> Thank you for getting in touch!</h3>
    </div>
    }
    </>
  )
}

export default AppWrap(Footer, 'contact');