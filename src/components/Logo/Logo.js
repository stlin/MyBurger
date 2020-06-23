import React from 'react';
import './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png'

const logo = (props) => (
    <div class="Logo">
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;