import React from 'react'
import './SocialIcons.css'
import { FaInstagram, FaFacebookF, FaTwitter,FaLinkedin} from 'react-icons/fa'

const SocialIcons = () => {
    return (
        <section id='social-icons'>
            <div className="container">
                <div className="icon">
                    <i>
                        <FaInstagram />
                    </i>
                </div>
                <div className="icon">
                    <i>
                        <FaFacebookF />
                    </i>
                </div>
                <div className="icon">
                    <i>
                        <FaTwitter/>
                    </i>
                </div>
                <div className="icon">
                    <i>
                        <FaLinkedin/>
                    </i>
                </div>
            </div>
        </section>
    )
}

export default SocialIcons