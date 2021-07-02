import React from 'react'
import NavContent from './NavContent'


const Navbar = ({openLogin, navbarClass, authenticated}) => {
    

    return(
        <div className='navbar default container-fluid custom-no-padding text-light d-flex justify-content-between'>
            <NavContent authenticated={authenticated} openLogin={openLogin} />
        </div>
    )
}

export default Navbar