import { NavLink, Outlet } from "react-router-dom";

function Services() {
    return (
      <div >
        <p>This is Service page...</p>
        <nav>
            <NavLink to='PServices' style={{marginRight:'50px'}}>premium </NavLink>
            <NavLink to='EServices'>economic</NavLink>
        </nav>
        <Outlet></Outlet>
      </div>
    );
  }
  
  export default Services;