import React from 'react';

import './styles.css';

const diego = require('../../img/diego.jpg');

const Logo = () => {
    return (
        <div className="logo">
        <img src={diego} alt="imagem-perfil"/>
        </div>  
    )
}

export default Logo;
