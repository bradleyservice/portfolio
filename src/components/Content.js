import React from 'react';
import './Content.css';
import photo from '../photo/australiapatiobrad.jpg';

export default function Content() {
    return (
        <div className='content'>
            <div className='about'>
                <img src={photo} className='profile-img' style={{height: '300px', width: '300px', borderRadius: '50%', border: '2px solid white'}}></img>
                <h4>About Me:</h4>
            </div>
        </div>
    )
}
