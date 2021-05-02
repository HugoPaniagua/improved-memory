import React from 'react'
require('../styles/navigator.css')

const Navigator = () => {
    return(
        <nav className="navMainContainer">
            <div className="navMenuContainer">
                <div className="menuContainer">
                    <div className="navMenu">
                        <p>Cartelera</p>
                        <p style={{fontSize: "45px"}}>Marow</p>
                        <p>En línea</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigator;