import React from 'react';
import './counter.css';
import faceOne from '../images/face_1.png';
import faceOneSmall from '../images/face_1_small.png';
import faceTwo from '../images/face_2.png';

const Counter = () =>{

    function counter(){
        console.log('scrolling')
    }

    return (
       <div >
         
            <h2 className='counterHeading'>Trust us and feel free to try our service</h2>
            <div className='counterGrid'>
                <div className='faces'>
                    <img className='face_1' src={faceOne} alt='face'/>
                    <img className='face_2' src={faceTwo} alt='face'/>
                    <img className='face_3' src={faceOne} alt='face'/>
                </div>

                <div className='counter'>
                    100000
                </div>

                <div className='faces'>
                    <img className='face_4'  src={faceTwo} alt='face'/>
                    <img className='face_5' src={faceOneSmall} alt='face'/>
                    <img className='face_6' src={faceOne} alt='face'/>
                </div>
            </div>
       
       </div>
    )
}

export default Counter;