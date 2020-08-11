import React from 'react';

import './styles.css';

import Logo from '../../components/Logo'
import Conteudo from '../../components/Conteudo';
import Contatos from '../../components/Contatos';

const Profile = () => {
    return (
        <container>
            <main>
             <left className="left-side">
                    <Logo />
                    <Conteudo />
                   <Contatos />
                <right></right>
        </left>
        </main>
        </container>
    )
}

export default Profile;