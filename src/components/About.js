import React from 'react';
import "bulma/css/bulma.min.css";
import pic from '../resources/images/profilePic.jpg';
import './About.css'

const About = () => {
    return (
        <section className='main'>
            <div className='about'>
                <div className='header1'>
                    <h1>Sean P. Zweifel</h1>
                </div>
                <div className='header2'>
                    <h1>Reach me at this email: spzweifel@gmail.com</h1>
                </div>
                <div className="profile-container">
                    <img 
                        src={pic} 
                        alt='profile pic'
                        style={{ width: "200px", height: "200px" }}
                        className='centered-image'
                    />
                </div>
                <p>My name is Sean, an aspiring fullstack developer based in Richmond, Virginia, USA. I originally graduated from Virginia Commonwealth University with a bachelors of science in forensic science with a chemistry minor. I have been working extensively over the past 4 years in gun crime intelligence in Richmond City. After a short but rewarding career in forensics, I've decided to make the transition to web development. Although, I'm new to this field, I'm excited to see where it takes me and to help improve wherever I can.</p>
            </div>
        </section>
    );
}


export default About;


// in this section, think about adding a professional picture or avatar. Use a picture preferably. Also, don't be afraid to rewrite the about me paragraph. Think of ways to make this look pretty and not too germanic.