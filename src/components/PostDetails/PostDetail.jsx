import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetail = () => {
    const {postId} = useParams();
    console.log(postId);
    
    const post = useLoaderData();
    console.log(post);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // one step back
        // navigate(`/posts`); // direct path call
        // jekono ekta hoilei hobe
    }
    return (
        <div>
            <h3>Post Details about: {post.id}</h3>
            <p>Title: {post.title}</p>
            <p><small>{post.body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetail;