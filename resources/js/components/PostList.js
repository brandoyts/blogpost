import React, { useEffect } from "react";
import PostItem from "./PostItem";
import "../../css/PostList.css";

function PostList({ posts }) {
    const renderPost = () => {
        return posts.map((post) => (
            <PostItem
                key={post.id}
                postId={post.id}
                title={post.title}
                author={post.user.name}
                date={post.created_at}
            />
        ));
    };

    return <div className="PostList">{renderPost()}</div>;
}

export default PostList;
