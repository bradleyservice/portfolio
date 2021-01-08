import React from 'react';
import './Content.css';
import photo from '../photo/australiapatiobrad.jpg';

export default function Content() {
    return (
        <div className='content'>
            <div className='about'>
                    <img src={photo} className='profile-img' style={{height: '300px', width: '300px', borderRadius: '50%', border: '2px solid white'}}></img>
                <div style={{display: 'flex', flexDirection: 'column', width: '40vw', border: '2px solid white', width: '40%', padding: '30px'}}>
                    {/* <h6 style={{display: 'flex', justifyContent: 'center', fontSize: '20px', margin: '7px'}}>About Me:</h6><br/> */}
                    <div>
                        As a former bartender turned web developer, I bring more than just technical skills to the table.
                        Spending over a decade in the service industry taught me valuable skills such as 
                        communication, empathy, and teamwork.
                        Attending DevMountain inspired a passion for learning while earning the skills 
                        needed to be a full-stack developer. I have experience building full stack applications on my own, 
                        but prefer the social setting of a group in an agile work environment. 
                    </div>
                    <div style={{marginTop: '20px'}}>bradleykservice@gmail.com</div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '30px'}}>
                <div style={{display: 'flex', justifyContent: 'space-evenly', width: '50vw', margin: '5px auto'}}>
                    <img src='css.svg' alt='icon' />
                    <img src='express.svg' alt='icon' />
                    <img src='github.svg' alt='icon' />
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '32.7vw', margin: '5px auto', color: 'white', fontWeight: 'bold'}}>
                    <div>&nbsp;&nbsp;&nbsp;CSS</div>
                    <div>EXPRESS</div>
                    <div>GITHUB</div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-evenly', width: '50vw', margin: '5px auto'}}>
                    <img src='javascript.svg' alt='icon' />
                    <img src='nodejs.svg' alt='icon' />
                    <img src='postgresql.svg' alt='icon' />
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '36vw', margin: '5px auto', color: 'white', fontWeight: 'bold'}}>
                    <div>JAVASCRIPT</div>
                    <div>NODEJS</div>
                    <div>POSTGRESQL</div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-evenly', width: '50vw', margin: '5px auto'}}>
                    <img src='react.svg' alt='icon' />
                    <img src='redux.svg' alt='icon' />
                    <img src='sass.svg' alt='icon' />
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '31.5vw', margin: '5px auto', color: 'white', fontWeight: 'bold', marginBottom: '40px'}}>
                    <div>REACT</div>
                    <div>REDUX</div>
                    <div>SASS</div>
                </div>
            </div>
        </div>
    )
}
