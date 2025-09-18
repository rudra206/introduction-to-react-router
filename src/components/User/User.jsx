

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
        </div>
    );
};

export default User;