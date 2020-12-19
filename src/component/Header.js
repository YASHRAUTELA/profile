import React from 'react';
import imgSrc from '../assets/images/circle-cropped.png';
function Header() {
    return (
        <section className="top-header style-one pad-50 bg-pattern-2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-6 offset-xl-1 text-left has-animation animate-in">
                        <img src={imgSrc} alt="avatar" className="avatar-img" />
                    </div>
                    <div className="col-xl-5 col-md-6 text-left">
                        <h1 className="has-animation animate-in">Yashwant Rautela</h1>
                        <p className="has-animation animate-in">Software Engineer <br /> <a href="https://intelligaia.com" target="_blank">Intelligaia Technologies Pvt Ltd</a></p>
                        <ul className="social-icons light list-inline has-animation animate-in">
                            <li className="list-inline-item"><a href="https://www.facebook.com/yashwant.rautela.5" target="_blank"><i className="icon-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/rautelayashwant/" target="_blank"><i className="icon-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/yashwant-rautela-5b531014b/" target="_blank"><i className="icon-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>)
}

export default Header;