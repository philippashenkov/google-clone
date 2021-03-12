import React from 'react';
import {Link} from "react-router-dom";
import './Home.css';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import Search from './Search';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__headers'>
                <div className='home__headersLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className='home__body'>
                <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt=""></img>
                <div className="home__inputContainer">
                    <Search hideButtons/>
                </div>
            </div>
        </div>
    );
};

export default Home;