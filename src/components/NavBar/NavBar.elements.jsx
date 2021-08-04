import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Nav=styled.nav`
display: flex;
width: 100%;
border: 1px solid red;
justify-content: center;
`

export const NavMenu=styled.ul`
display: flex;
border: 1px solid blue;
padding: 0;
`

export const NavItem=styled.li`
margin: 5px 7px;
border: 1px solid yellow;
list-style-type: none;

`
export const NavLink=styled(Link)`
text-decoration: none;
`