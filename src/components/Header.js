import React from 'react';
import './Header.css';

export default function Header() {
    
    return (
        <div className='header'>
            <h1>brAdley service</h1>
            <div className='links'>
                <a href='https://github.com/bradleyservice' style={{color: 'white'}}>github</a> <br/>
                <a href='https://www.linkedin.com/in/bradley-service' style={{color: 'white'}}>linkedin</a> <br/>
                <a href='https://drive.google.com/file/d/1ns28sufwti9KVNUldv7hYGB94NeOgPVT/view?usp=sharing' style={{color: 'white'}}>resume</a>
            </div>
        </div>
    )
}
