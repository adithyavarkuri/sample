import React from 'react';
import {Link ,useLocation ,Outlet} from 'react-router-dom';

export  function Home(){
    return (
    <div>
        <h1>[Company website]</h1>
        <nav>
            <Link to='about'>About</Link>
            <Link to='events'>events</Link>
            <Link to='contact'>contact</Link>
        </nav>
    </div>
    )
}

export  function About(){
    return (
    <div>
        <h1>[About]</h1>
        <Outlet></Outlet>
    </div>
    )
}

export  function Events(){
    return (
    <div>
        <h1>[Events]</h1>
    </div>
    )
}

export  function Contact(){
    return (
    <div>
        <h1>[Contact]</h1>
    </div>
    )
}

export  function home(){
    <div>
        <h1>[Company website]</h1>
    </div>
}


export function Woops404(){
    let location = useLocation();
    return (
        <div>
            <h1> {location.pathname}  page does not exists</h1>
        </div>
    )
}

export function Services(){
    return (
        <div>
            <h2>Our sevices</h2>
        </div>
    )
}

export function ComponentHistory(){
    return (
        <div>
            <h2>Our ComponentHistory</h2>
        </div>
    )
}

export function Location(){
    return (
        <div>
            <h2>Our Location</h2>
        </div>
    )
}