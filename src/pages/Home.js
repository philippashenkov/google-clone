import React from 'react';
import {Link} from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <h1>Hello googles</h1>

            <div className='home__headers'>
                <div className='home__headersLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                </div>
            </div>

            <div className='home__body'>
                
            </div>
        </div>
    );
};

export default Home;