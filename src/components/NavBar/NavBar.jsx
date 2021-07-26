import React from 'react'
import { Link } from 'react-router-dom';
import {
    Nav,
    NavMenu,
    NavItem
} from './NavBar.elements'


const Navbar = () => {

    return(
        <>
        <Nav>
            <NavMenu>
                <Link to="/Home">
                <NavItem>
                    Inicio
                </NavItem>
                
                </Link>

            </NavMenu>

        </Nav>

        </>
    );
}

export  default Navbar