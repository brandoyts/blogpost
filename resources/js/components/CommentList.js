import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import CommentItem from "./CommentItem";
import "../../css/CommentList.css";

function CommentList({ comments, postId }) {
    const [initialComment, setInitialComment] = useState([]);

    useEffect(() => {
        const initComments = () => {
            setInitialComment(comments);
        };

        const listenToSocket = () => {
            Echo.channel(`post.${postId}`).listen("NewComment", (comment) => {
                setInitialComment((prev) => [comment, ...prev]);
            });
        };

        initComments();
        listenToSocket();
    }, []);

    const renderComments = () => {
        return initialComment.map((comment) => (
            <li key={comment.id}>
                <CommentItem
                    comment={comment.content}
                    date={comment.created_at}
                    author={comment.user.name}
                />
            </li>
        ));
    };

    return <ul className="commentList">{renderComments()}</ul>;
}

export default CommentList;
