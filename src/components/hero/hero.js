import React from 'react';
import './hero.css';
import Button from '../UI/button';
import heroImage from '../images/hero.png';


const Hero = () =>{

    return(
        <React.Fragment>
            <div>
                <div className='nav'>
                    <div className='logo'>
                        Taskia
                    </div>
                    
                    <Button class='heroBtn' text='Try it Free' color='#525FFB' bg='transparent'/>
                </div>

                <div className='hero'>
                    <div className='grid'>
                        <div className='gridItem'>
                            <div>
                                <h2>
                                    Task management and lists Tool
                                </h2>

                                <p>
                                    We believe that designing products and services in close
                                    partnership with our clients is the only way to have a real
                                    impact on their business.
                                </p>

                                <div className='email'>
                                    <input placeholder='elon@tesla.com' type='email'/>
                                    <Button class='heroBtn2' text='Try it Free' color='#fff' bg='#525FFB'/>
                                </div>
                            </div>
                        </div>

                        <div className='gridItem'>
                            <div className='imageGrid'>
                                <img src={heroImage} alt='hero section inforgraphic' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero;