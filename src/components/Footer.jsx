import React from 'react'

function Footer() {

    return (
        <footer className="footer">
            <div className="row">
                <div className="col l-6 m-12 c-12">
                    <div className="contact">
                        <div className="sub-contact">
                            <i className="fas fa-map-marker-alt" />
                            <span className="sub-contact__span">
                                Ha Long, Quang Ninh
                            </span>
                        </div>
                        <div className="sub-contact">
                            <i className="fas fa-phone-alt" />
                            <span className="sub-contact__span">+84 347 748 751</span>
                        </div>
                        <div className="sub-contact">
                            <i className="far fa-envelope" />
                            <span className="sub-contact__span">
                                hoanghien99qn@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col l-6 m-12 c-12">
                    <div className="about-me">
                        <h3>About Me</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="social">
                            <i className="fab fa-facebook-square" />
                            <i className="fab fa-linkedin" />
                            <i className="fab fa-github-square" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;