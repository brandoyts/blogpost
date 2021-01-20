import React, { useRef } from "react";
import "../../css/CommentBox.css";

function CommentBox() {
    const commentRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = commentRef.current.value;

        // api.post(`/posts/${postId}/comment`, { body });

        commentRef.current.value = "";
    };

    const handleInputChange = (e) => {
        e.target.value = commentRef.current.value;
    };

    return (
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
    );
}

export default CommentBox;
