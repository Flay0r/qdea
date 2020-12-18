import React from 'react';
import logo from '../assets/Qdea.svg';
import '../styles/logo.css';

function Logo() {
        return(
        <>
            <section className="logo"><img src={logo} alt="" /><div>by Team Prodigy</div></section>
        </>
        );
}
export default Logo;