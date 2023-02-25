import { NavLink } from "react-router-dom"

const Navbar = () => {

    const NavSyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#fff' : 'white',
            borderColor: isActive ? 'white' : 'black',
        }
    }

    return(
        <nav>
            <NavLink to='/' style={NavSyles}>Home</NavLink>
            <NavLink to='/about' style={NavSyles}>About</NavLink>
        </nav>
    )
}


export default Navbar