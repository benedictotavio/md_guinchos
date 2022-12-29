import React,{useState} from 'react'
import './ContactZone.css'
import { FaWhatsapp,FaVoicemail} from 'react-icons/fa'
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
                <a className={`social ${hide ? 'hide':''}`} href="http://wa.me/5511971181829">
                    <i>
                        <FaWhatsapp/>
                    </i>
                </a>
                <a className={`social ${hide ? 'hide':''}`} href="#">
                    <i>
                        <FaVoicemail/>
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