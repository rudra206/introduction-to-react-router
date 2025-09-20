import { Link } from "react-router-dom";

 
const Post = ({post}) => {

      const postStyle ={
      border:"2px solid blue"  ,
      padding:'5px',
      borderRadius:'20px',
    //   marginBottom:'3px',
      
    }

    return (
        <div style={postStyle}>
            <h4>Post of Id: {post.id}</h4>
            <p>{post.title}</p>
            <Link to={`/post/${post.id}`}>Post Details</Link>
            <Link to={`/post/${post.id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Post;