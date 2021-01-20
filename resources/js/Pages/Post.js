import React from "react";
import Layout from "../components/Layout";
import CommentBox from "../components/CommentBox";
import "../../css/Post.css";

function Post({ post }) {
    return (
        <Layout>
            <div className="post">
                <div className="post__header">
                    <h1>{post.title}</h1>
                    <div className="post__header__info">
                        <p>{post.user.name}</p>
                        <p className="post__date">{post.created_at}</p>
                    </div>
                </div>
                <div className="post__body">{post.content}</div>
                <div className="post__footer__comments">
                    <CommentBox />
                </div>
            </div>
        </Layout>
    );
}

export default Post;
