import React, { useRef } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import "../../css/CommentBox.css";

function CommentBox({ postId }) {
    const commentRef = useRef();
    const {
        props: { user },
    } = usePage();

    const handleSubmit = (e) => {
        e.preventDefault();

        const comment = {
            content: commentRef.current.value,
            postId: postId,
        };

        Inertia.post(`/post/${postId}/comment`, comment);

        commentRef.current.value = "";
    };

    const handleInputChange = (e) => {
        e.target.value = commentRef.current.value;
    };

    const renderCommentBox = () => {
        return user ? (
            <form className="commentBox" onSubmit={handleSubmit}>
                <h3>Comments:</h3>
                <textarea
                    name="comment"
                    row="3"
                    ref={commentRef}
                    onChange={handleInputChange}
                ></textarea>
                <button type="submit">Save Comment</button>
            </form>
        ) : (
            <a href="/login">Login to comment in this post</a>
        );
    };

    return <>{renderCommentBox()}</>;
}

export default CommentBox;
