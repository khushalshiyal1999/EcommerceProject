import { Col, Row } from 'antd'
import React from 'react'
import FooterLogo from '../../assets/images/footer-logo.png';
import { footerData, footerData2 } from './HomePageUtils'

export const Footer = () => {
    return (
        <>
            <div className='section7' gutter={0}>
                <Row className='desktop-view-row'>
                    <div className='footer-imgs'>
                        {footerData.map((obj, index) => <div key={index}><img src={obj.url} alt='new-img' /></div>)}
                    </div>
                    <div className='footer-imgs'>{footerData2.map((obj, index) => <div key={index}><img src={obj.url} alt='new-img' /></div>)}</div>
                </Row>
                <Row className='mobile-view-row'>
                    <div >
                        {footerData.map((obj, index) => <Col xs={24} key={index}><div className='footer-img-div'><img src={obj.url} alt='new-img' /></div> </Col>)}
                    </div>
                    <div >{footerData2.map((obj, index) => <Col xs={24} key={index}><div  className='footer-img-div'><img src={obj.url} alt='new-img' /></div></Col>)}</div>
                </Row>
            </div>
            <div className='footer container'>
                <Row>
                    <Col xs={24} xl={6}>
                        <div className='footer-col-1'>
                            <img src={FooterLogo} alt='footer-logo'/>
                            <div className='add-div'>
                                <p className='footer-heading'>
                                    Address
                                </p>
                                <p className='footer-address'>
                                    Store & Office
                                    Jl. Setrasari Kulon III, No. 10-12,
                                    Sukarasa, Sukasari, Bandung,
                                    Jawa Barat, Indonesia 40152
                                </p>
                            </div>
                            <div className='add-div'>
                                <p className='footer-heading'>
                                    Office Hour
                                </p>
                                <p className='footer-address'>
                                    Monday - Sunday
                                    10.00 - 18.00
                                </p>
                            </div>

                        </div>
                    </Col>
                    <Col xs={24} xl={6}>
                        <div className='footer-col-2'>
                            <h3 className='footer-heading-underline'>Instagram</h3>
                            <div className='get-in-touch'>
                                <p className='footer-heading'>Phone</p>
                                <a href='tel:022-20277564'>022-20277564</a>
                            </div>
                            <div className='get-in-touch'>
                                <p className='footer-heading'>Service Center</p>
                                <a href='tel:0811-233-8899'>0811-233-8899</a>
                            </div>
                            <div className='get-in-touch'>
                                <p className='footer-heading'>Customer Service</p>
                                <a href='tel:0811-233-8899'>0811-235-9988</a>
                            </div>
                            <div className='social-links'>
                                <a href='https://www.facebook.com/'><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href='https://www.instagram.com/'><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href='https://twitter.com/login'><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href='https://www.youtube.com/'><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} xl={6}>
                    <div className='footer-col-3'>
                            <h3 className='footer-heading-underline'>Useful Link</h3>
                            <div className='links'>
                            <a href='/'>Warranty & Complaints</a> 
                            <a href='/'>Order & Shipping</a>
                            <a href='/'>Tracking Order</a>
                            <a href='/'>About Us</a>
                            <a href='/'>Repair</a>
                            <a href='/'>Terms</a>
                            <a href='/'>FAQ</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} xl={6}>
                    <div className='footer-col-3'>
                            <h3 className='footer-heading-underline'>Campaign</h3>
                            <div className='links'>
                            <a href='/'>Mengenal Arti Cukup</a> 
                            <a href='/'>Tell Your Difference</a>
                            <a href='/'>Waykambas</a>
                            <a href='/'>Rebrand</a>
                            <a href='/'>Gallery</a>
                            <a href='/'>Singo</a>
                            <a href='/'>Rakai</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div></>


    )
}
