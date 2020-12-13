function Footer() {
    return (<>
        <section className="footer-wrapper pad-50 bg-lightblue style-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 widget">
                        {/* <a href="https://yashrautela.github.io/profile/" className="logo"><img src="./Cabe - Minimal and Personal Blog Template_files/logo-3.png" alt="logo" /></a> */}
                    </div>
                    <div className="col-lg-3 col-md-4 widget">
                        <ul className="widget-link">
                            <li><a href="https://yashrautela.github.io/profile/">Blog</a></li>
                            <li><a href="https://yashrautela.github.io/profile/">About</a></li>
                            <li><a href="https://yashrautela.github.io/profile/">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 widget">
                        <ul className="widget-link">
                            <li><a href="https://yashrautela.github.io/profile/">Beauty</a></li>
                            <li><a href="https://yashrautela.github.io/profile/">Fashion</a></li>
                            <li><a href="https://yashrautela.github.io/profile/">Lifestyle</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3  col-md-12 widget">
                        <span className="widget-title">Subscribe</span>
                        <form action="#" className="subscribe-form mt-3">
                            <input type="text" placeholder="Your email address" />
                            <button className="subscribe-bttn"><i className="fa fa-arrow-right"></i></button>
                        </form>
                    </div>
                </div>
                <div className="row pad-top-50">
                    <div className="col-lg-3 col-md-4 widget">
                        <ul className="social-share list-inline">
                            <li className="list-inline-item"><a href="https://yashrautela.github.io/profile/"><i className="fa fa-facebook-square"></i></a></li>
                            <li className="list-inline-item"><a href="https://yashrautela.github.io/profile/"><i className="fa fa-heart"></i></a></li>
                            <li className="list-inline-item"><a href="https://yashrautela.github.io/profile/"><i className="fa fa-linkedin-square"></i></a></li>
                            <li className="list-inline-item"><a href="https://yashrautela.github.io/profile/"><i className="fa fa-twitter-square"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-4 widget">
                        <ul className="widget-link-2 list-inline">
                            <li className="list-inline-item"><a href="https://yashrautela.github.io/profile/">Home</a></li>
                            <li className="list-inline-item"><a href="https://yashrautela.github.io/profile/">Service</a></li>
                            <li className="list-inline-item"><a href="https://yashrautela.github.io/profile/">Team</a></li>
                            <li className="list-inline-item"><a href="https://yashrautela.github.io/profile/">Faq</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 widget text-right">
                        <p>© 2019 themevisual 2019</p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Footer;