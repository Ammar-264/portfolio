 import './contactSection.css';
import img from './images/1f5a5.png';
import { GoLocation } from "react-icons/go";
import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { Fade } from 'react-awesome-reveal';


function Contact(prop) {
    const {id} =prop;
    return (
        <div id={id} className='col-md-12 col-lg-7 col-sm-12'>
            <div className='contactDetail'>
                <Fade left>
                <h1 className='my-3'>Reach Out to me!</h1>
                <p className='my-3'>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
                <span className='work'>
                    <p >" Front-End Developer <img src={img} /> , Designer <img src={img} /> "</p>
                </span>
                <div className='location'>
                    <p><i> <GoLocation /></i> Karachi , Pakistan</p>
                    <div className='socialmedia-linkss'>
                        <a className='github icon-button' href='https://github.com/Ammar-264'><i><FaGithub /></i></a>
                        <a className='facebook icon-button' href='https://www.facebook.com/ammar.farooq.26'><i><FaFacebookF /></i></a>
                        <a className='fiver icon-button' href='https://www.fiverr.com/ammarfarooq145?up_rollout=true'><i><SiFiverr /></i></a>
                        <a className='instagram icon-button' href='https://www.instagram.com/ammar_farooq_26/'><i><FaInstagram /></i></a>
                        <a className='upwork icon-button' href='https://www.upwork.com/freelancers/~018c6a36d7f9d99ffe'><i><SiUpwork /></i></a>
                    </div>
                </div>
</Fade>
            </div>

        </div>
    )
}

export default Contact;