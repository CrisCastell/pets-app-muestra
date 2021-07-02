import React, {useState, useEffect} from 'react'
import { Fade } from '@material-ui/core';
import NavContent from './NavContent'

const NavbarDinamic = ({openLogin, authenticated}) => {

    const [scrolling, setScrolling] = useState(false)
    const scrollTop = 72

    useEffect(() => {
        const onScroll = e => {
            setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);
    

    return(
        <Fade in={scrolling} >
            <div className="navbar dinamic custom-no-padding container-fluid d-flex justify-content-between">
                <NavContent authenticated={authenticated} openLogin={openLogin} fromDinamic={true} />
            </div>
        </Fade>
    )
}

export default NavbarDinamic