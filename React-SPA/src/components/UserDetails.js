import { useParams } from "react-router-dom";

function UserDetails() {
   const params = useParams();
    return (
      <div >
      <p>This is UserDetails!!!{params.userId}</p>
      </div>
    );
  }
  
  export default UserDetails;