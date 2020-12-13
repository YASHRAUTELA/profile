import imgSrc from '../assets/images/profile-round.png';
function Header() {
    return (<>
        <section className="top-header style-one pad-125 bg-pattern-2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-6 offset-xl-1 text-left has-animation animate-in" data-delay="0">
                        <img src={imgSrc} alt="avatar" className="avatar-img" />
                    </div>
                    <div className="col-xl-5 col-md-6 text-left">
                        <h1 className="has-animation animate-in" data-delay="10"> Hi. i am Cabe Deo</h1>
                        <p className="has-animation animate-in" data-delay="20"> You can read my blog as a content of  <span className="txt-rotate" data-period="2000" data-rotate="[ &quot;devloper.&quot;, &quot;designer.&quot;, &quot;artist.&quot;, &quot;writter.&quot; ]"><span className="wrap">devloper.</span></span> </p>
                        <ul className="social-icons light list-inline has-animation animate-in" data-delay="30">
                            <li className="list-inline-item"><a href="https://yashrautela.github.io/profile/"><i className="icon-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="https://yashrautela.github.io/profile/"><i className="icon-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="https://yashrautela.github.io/profile/"><i className="icon-linkedin"></i></a></li>
                            <li className="list-inline-item"><a href="https://yashrautela.github.io/profile/"><i className="icon-tumblr"></i></a></li>
                            <li className="list-inline-item"><a href="https://yashrautela.github.io/profile/"><i className="icon-youtube"></i></a></li>
                            <li className="list-inline-item"><a href="https://yashrautela.github.io/profile/"><i className="icon-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className="header-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-12 text-left">
                        <a href="https://yashrautela.github.io/profile/" className="menu-click"><span></span><span></span><span></span></a>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <nav id="main-menu" className="text-center">
                            <ul>
                                <li className="has-submenu"><a href="https://yashrautela.github.io/profile/">Home</a><span className="submenu-toggle"></span>
                                    <ul className="level-two">
                                        <li><a href="https://yashrautela.github.io/profile/">Home 1</a></li>
                                        <li><a href="https://yashrautela.github.io/profile/">Home 2</a></li>
                                        <li><a href="https://yashrautela.github.io/profile/">Home 3</a></li>
                                        <li><a href="https://yashrautela.github.io/profile/">Home 4</a></li>
                                        <li className="dots has-submenu"><a href="https://yashrautela.github.io/profile/">Home 12</a><span className="submenu-toggle"></span>
                                            <ul className="level-three">
                                                <li><a href="https://yashrautela.github.io/profile/">Style 1</a></li>
                                                <li><a href="https://yashrautela.github.io/profile/">Style 2</a></li>
                                                <li><a href="https://yashrautela.github.io/profile/">Style 3</a></li>
                                                <li><a href="https://yashrautela.github.io/profile/">Style 4</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="https://yashrautela.github.io/profile/">Home 13</a></li>
                                        <li><a href="https://yashrautela.github.io/profile/">Home 14</a></li>
                                        <li><a href="https://yashrautela.github.io/profile/">Home 15</a></li>
                                    </ul>
                                </li>
                                <li><a href="https://yashrautela.github.io/profile/">Category</a></li>
                                <li className="has-submenu"><a href="https://yashrautela.github.io/profile/">Pages</a><span className="submenu-toggle"></span>
                                    <ul className="level-two">
                                        <li className="dots has-submenu"><a href="https://yashrautela.github.io/profile/">Single Blog</a><span className="submenu-toggle"></span>
                                            <ul className="level-three">
                                                <li><a href="https://yashrautela.github.io/profile/">Single 1</a></li>
                                                <li><a href="https://yashrautela.github.io/profile/">Single 2</a></li>
                                                <li><a href="https://yashrautela.github.io/profile/">Single 3</a></li>
                                                <li><a href="https://yashrautela.github.io/profile/">Single 4</a></li>
                                                <li><a href="https://yashrautela.github.io/profile/">Single 5</a></li>
                                            </ul>
                                        </li>
                                        <li className="dots has-submenu"><a href="https://yashrautela.github.io/profile/">Shop</a><span className="submenu-toggle"></span>
                                            <ul className="level-three">
                                                <li><a href="https://yashrautela.github.io/profile/">Shop List</a></li>
                                                <li><a href="https://yashrautela.github.io/profile/">Single Product</a></li>
                                                <li><a href="https://yashrautela.github.io/profile/">Cart</a></li>
                                                <li><a href="https://yashrautela.github.io/profile/">Checkout</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="https://yashrautela.github.io/profile/">About 2</a></li>
                                        <li><a href="https://yashrautela.github.io/profile/">Contact 2</a></li>
                                        <li><a href="https://yashrautela.github.io/profile/">404 page</a></li>
                                    </ul>
                                </li>
                                <li><a href="https://yashrautela.github.io/profile/">About</a></li>
                                <li><a href="https://yashrautela.github.io/profile/">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    {/* <div className="col-lg-2 col-md-4 text-right">
                            <a href="https://yashrautela.github.io/profile/" className="search-icon">
                                <img src="./Cabe - Minimal and Personal Blog Template_files/icons8-search-50.png" alt="search-icon" />
                            </a>
                        </div> */}
                </div>
            </div>
        </section>
    </>)
}

export default Header;