import './thirdSection.css';
import img from './images/sec3.svg';
import { Fade } from 'react-awesome-reveal';

function ThirdSectionDetails(prop) {
    const { id } = prop;
    return (
        <div id={id} className='my-5 col-md-12 col-lg-6 col-sm-12'>
            <Fade left>
                <div className='details'>
                    <h1>Proficiency</h1>
                    <div className='progress-bars'>

                        <span>
                            <label className='py-1 fs-5 mx-2' for='html-css'>HTML 5 <b className='fs-3 fw-bold text-dark'>/</b> CSS 3</label><br />
                            <progress id='html-css' className='col-10 ' value="85" max="100" />
                        </span>

                        <span>
                            <label className='py-1 fs-5 mx-2' for='js'>JavaScript</label><br />
                            <progress id='js' className='col-10 ' value="75" max="100" />
                        </span>

                        <span>
                            <label className='py-1 fs-5 mx-2' for='bootstrap'>Bootstrap </label><br />
                            <progress id='bootstrap' className='col-10 ' value="70" max="100" />
                        </span>

                    </div>
                </div>
            </Fade>
        </div>
    )



}


function ThirdSectionSvg() {
    return (

        <div className='svg my-5 col-md-12 col-lg-5 col-sm-12'>
            <Fade right>
                <img src={img} />
            </Fade>
        </div>
    )
}

export { ThirdSectionDetails, ThirdSectionSvg }