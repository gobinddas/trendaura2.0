import React from 'react'
import { Facebook, Instagram } from 'lucide-react';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-row'>
                    <div className='brand-section footer-item'>
                        <div className='brand'>
                            <img src='./logo-dark.png' />
                        </div>
                        <p>Trend Aura Clothing is a modern eCommerce fashion brand offering stylish, comfortable, and affordable clothing that reflects the latest trends for every personality.</p>
                    </div>
                    <div className='page-links footer-item'>
                        <h3 className='block-heading'>Quick Links</h3>
                        <div className='link-block'>
                            <a>Home</a>
                            <a>Brand</a>
                            <a>Collections</a>
                            <a>Privacy Policy</a>
                            <a>Terms And Conditions</a>
                        </div>

                    </div>
                    <div className='contact-info footer-item'>
                        <h3 className='block-heading'>Contact Info</h3>
                        <div className='link-block'>
                            <a>Phone : 9808740455</a>
                            <a>Mail : Gobind98077@gmail.com</a>
                            <a>Address : Baneswor, Kathmandu</a>
                            <div className='social-icons'>
                                <a className='item'><Facebook className='icon' /></a>
                                <a className='item'><Instagram className='icon' /></a>
                                <a className='item'><img src='./tiktok.png' /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <p className='copyright'>Copyright © 2025  <a href="https://www.bluebugsoft.com/" target='_blank'> BlueBug Software.</a> </p>

            </div>
        </div>
    )
}

export default Footer