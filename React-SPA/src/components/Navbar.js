import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <NavLink to="/" style={{marginLeft:'12px'}}>Home</NavLink>
            <NavLink to="/About"style={{marginLeft:'12px'}}>About</NavLink>
            <NavLink to="/Contact"style={{marginLeft:'12px'}}>Contact</NavLink>
            <NavLink to="/Services"style={{marginLeft:'12px'}}>Service</NavLink>
            <NavLink to="/UserList"style={{marginLeft:'12px'}}>list</NavLink>
        </nav>

    );
}
export default Navbar;