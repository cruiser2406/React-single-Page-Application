import { NavLink, Outlet } from "react-router-dom";

function UserList() {
   
    return (
      <div >
        
        <h1><NavLink to=':1'>User 1</NavLink></h1>
        <h1><NavLink to=':2'>User 2</NavLink></h1>
        <h1><NavLink to=':3'>User 3</NavLink></h1>
        <Outlet></Outlet>
      </div>
    );
  }
  
  export default UserList;