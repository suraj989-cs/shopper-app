import React from 'react';
import Facebook from "@mui/icons-material/Facebook";
import { Google, Instagram, Pinterest, Twitter } from '@mui/icons-material';
import "./Contact.scss";

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <div className='contact-quote'>BE IN TOUCH WITH US:</div>
            <div className="mail">
                <input type="email" placeholder='Enter your email...'/>
                <button>JOIN US</button>
            </div>
            <div className='icons'>
                <Facebook/>
                <Instagram/>
                <Twitter/>
                <Google/>
                <Pinterest/>
            </div>
        </div>
    </div>
  )
}

export default Contact