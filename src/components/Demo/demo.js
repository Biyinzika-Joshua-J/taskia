import './demo.css';
import Apple from '../images/apple.png';
import Android from '../images/android.png';
import demo from '../images/demo.png';

const Demo = () =>{

    return (
        <div class='demoGrid'>
            <div className='demoGridItem'>
                <h2>
                    Seamless Team Workflow and Efficient Task Management
                </h2>

                <p>
                Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.
                </p>

                <div className='app'>
                    <img className='apple-icon' src={Apple} alt='app'/>
                    <img className='android-icon' src={Android} alt='app'/>
                </div>
            </div>

            <div className='demoGridItem'>
                <img src={demo} alt='demo'/>
            </div>
        </div>
    )
}

export default Demo;