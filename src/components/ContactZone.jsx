import React,{useState} from 'react'
import './ContactZone.css'
import { FaWhatsapp} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {FiMessageCircle} from 'react-icons/fi'

const ContactZone = () => {

    const [hide,setHide] = useState('')

        const handleClick = event => {
            // 👇️ toggle isActive state on click
            setHide(current => !current);
          };

    return (
        <div id='contacts'>
            <div className="wrapper">
                <a className={`social ${hide ? 'hide':''}`} href="http://wa.me/5511971181829" target='_blank' rel="noreferrer">
                    <i>
                        <FaWhatsapp/>
                    </i>
                </a>              
                <a className={`social ${hide ? 'hide':''}`} href="mailto:otavio.bene2212@gmail.com?subject=Md Guincho">
                    <i>
                        <HiOutlineMail/>
                    </i>
                </a>
                <a className="close-button" onClick={handleClick}>
                    <i>
                        <FiMessageCircle/>
                    </i>
                </a>
            </div>
        </div>
    )
}

export default ContactZone