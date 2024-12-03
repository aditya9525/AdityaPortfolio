import './Footer.css'


const Footer = () => {
    return (
        <>
            <footer className="footer" id='footer1'>
                <h1>Take Coffee & <span>Chat With Me</span> </h1>
                <div className="media">
                    <div className="media1">
                        <div className="media-card">
                            <img src="/Images/email.png" alt="" />
                            <a href="mailto:adityastar432@gmail.com">
                                adityastar432@gmail.com
                            </a>
                        </div>
                        <div className="media-card">
                            <img src="/Images/mobile.png" alt="" />
                            <a href="tel:+919304957497">
                                +919304957497
                            </a>
                        </div>
                        <div className="media-card">
                            <img src="/Images/what.png" alt="" />
                            <a href="https://wa.me/+919304957497" target='_blank' rel='noopener noreferrer'>
                                Whatsapp
                            </a>
                        </div>

                        <div className="media-card">
                            <img src="/Images/linkedin.png" alt="" />
                            <a href="https://www.linkedin.com/in/adityak432/">
                                Linkedin
                            </a>
                        </div>

                        <div className="media-card">
                            <img src="/Images/github-mark.png" alt="" />
                            <a href="https://github.com/aditya9525" target='_blank' rel='noopener noreferrer'>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>


            </footer>

        </>
    )
}

export default Footer
