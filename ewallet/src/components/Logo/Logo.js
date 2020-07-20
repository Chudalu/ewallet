import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'

const Logo = ({name}) => {
    return(
       <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner"> <img className='center' alt='logo' src={`https://robohash.org/${name}`} height='200' width='200'/> </div>
            </Tilt>
       </div>
    );
}

export default Logo;