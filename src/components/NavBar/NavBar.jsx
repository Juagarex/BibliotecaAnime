import React from 'react'
import { Link } from 'react-router-dom';
import {
    Nav,
    NavMenu,
    NavItem,
    NavLink
} from './NavBar.elements'


const Navbar = () => {

    return(
        <>
        <Nav>
            <NavMenu>
                <NavItem>
                    <NavLink to="/Home">
                        Home
                    </NavLink>
                </NavItem>
                
                <NavItem>
                    <NavLink to="/">
                        Login
                    </NavLink>
                </NavItem>
            </NavMenu>

        </Nav>

        </>
    );
}

export  default Navbar