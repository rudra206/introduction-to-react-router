import { useLoaderData } from "react-router-dom";


const PostDetail = () => {
    const post =useLoaderData();
    console.log(post);
    return (
        <div>
            <h3>Post Details about: {post.id}</h3>
        <p>Title: {post.title}</p>
        <p><small>{post.body}</small></p>
        </div>
    );
};

export default PostDetail;