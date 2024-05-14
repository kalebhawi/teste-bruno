import React from 'react'

const Navbar = () => {
    var numeroDaFonte = 28

    return (
        <div className="navbar">
            <p style={{ color: '#29c318', fontSize: numeroDaFonte + 'px' }}>NAVBAR</p>
            <ul>
            <li className="liEstilo"><a href="/perfil">Perfil</a></li>
            <li><a href="/configuracao">Configuracao</a></li>
            </ul>
        </div>
    )
}

export default Navbar