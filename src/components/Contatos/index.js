import React from 'react'

import './styles.css';

const linkedin = require('../../img/linkedin.svg');
const github = require('../../img/github.svg');
const mail = require('../../img/mail.svg');


const Contatos = () => {
    return (
        <div className="contato">
        <div className="actions">
        <a href="https://www.linkedin.com/in/diego-andrade-cruz-1644b059/" target="_blank" rel="noopener noreferrer">
        <button>
            <img src={linkedin} alt="linkedin"></img>
        </button>
        </a>
        <a href="https://github.com/diegoandradepoa" target="_blank" rel="noopener noreferrer">
        <button>
            <img src={github} alt="github"/>
            </button>
        </a>
        <a href="mailto:diegoandradecruz15@gmail.com" target="_blank" rel="noopener noreferrer">
        <button>
            <img src={mail} alt="mail"/>
        </button>
        </a>
        </div>
            </div>
            )
}

export default Contatos;