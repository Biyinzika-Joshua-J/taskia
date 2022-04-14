import React from "react";
import './service.css';
import ImageOne from '../images/service_1.png';
import ImageTwo from '../images/service_2.png';
import ImageThree from '../images/service_3.png';

const Service = () =>{

    return (
        <React.Fragment>
            <h2 className='serviceHeading'>
                Featured Service that We Provide
            </h2>

            <div className='serviceGrid'>
                <div className='serviceItem'>
                    <div className='item-1'>
                        <img src={ImageOne} alt='service/'/>
                        <h4>
                            Keep tasks in one place
                        </h4>
                        <p>
                            Save time, avoid losing work and information, delegate, and track tasks to stay on schedule
                        </p>
                    </div>
                </div>

                <div className='serviceItem'>
                    <div className='item-2'>
                            <img src={ImageTwo} alt='service/'/>
                            <h4>
                                Keep tasks in one place
                            </h4>
                            <p>
                                Save time, avoid losing work and information, delegate, and track tasks to stay on schedule
                            </p>
                        </div>
                </div>

                <div className='serviceItem'>
                    <div className='item-3'>
                            <img src={ImageThree} alt='service/'/>
                            <h4>
                                Keep tasks in one place
                            </h4>
                            <p>
                                Save time, avoid losing work and information, delegate, and track tasks to stay on schedule
                            </p>
                        </div>
                </div>
        </div>
        </React.Fragment>
    )
}

export default Service;