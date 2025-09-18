import { Link } from "react-router-dom";

const User = ({user}) => {
    const userStyle ={
      border:"2px solid blue"  ,
      padding:'5px',
      borderRadius:'20px',
    //   marginBottom:'3px',
      
    }

    return (
        <div style={userStyle}>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <Link to={`/user/${user.id}`}>Show Details</Link>
            <Link to= {`/user/${user.id}`}>
            <button>Click Me</button>
            </Link>
            
        </div>
    );
};

export default User;