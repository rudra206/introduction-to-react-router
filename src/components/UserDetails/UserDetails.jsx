import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user  = useLoaderData();
    // console.log(user);
    // const {name} = user;
    return (
        <div>
            <h2>Details about user: {user.name}</h2>
            <h3>Visit us: {user.website}</h3>
        </div>
    );
};

export default UserDetails;