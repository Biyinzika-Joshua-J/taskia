import React from 'react';
import Image from '../images/importance.png';
import './importance.css';
import Button from '../UI/button';

const Importance = () =>{

    return (
        <div className='importanceGrid'>
            <div className='importanceImage'>
                <img src={Image} alt='Importance'/>
            </div>
            <div className='importanceText'>
                <h2>
                    Why do you need task management software? 
                </h2>

                <p>
                Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.
                </p>

                

                <Button class='heroBtn2' text='Learn more' color='#fff' bg='#525FFB'/>


            </div>
        </div>
    )
}

export default Importance;