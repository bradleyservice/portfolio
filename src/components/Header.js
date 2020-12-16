import React from 'react';
import './Header.css';

export default function Header() {
    
    return (
        <div className='header'>
            <h1>brAdley service</h1>
            <div className='links'>
                <a href='https://github.com/bradleyservice' style={{color: 'white'}}>github</a> <br/>
                <a href='https://www.linkedin.com/in/bradley-service' style={{color: 'white'}}>linkedin</a> <br/>
                <a href='https://docs.google.com/document/d/1iSNQIoZg8JQBg7kVAGpindAygyq5FLTEPmkR2YuF9S8/edit#heading=h.6oztx7omgpqo' style={{color: 'white'}}>resume</a>
            </div>
        </div>
    )
}
