import React from "react";
import "../../css/PostItem.css";
import { InertiaLink } from "@inertiajs/inertia-react";

function postItem({ postId, title, author, date }) {
    return (
        <div className="postItem">
            <div className="postItem__header">
                <h2>{title}</h2>
                <div className="postItem__header_info">
                    <p>{author}</p>
                    <small>{date}</small>
                </div>
            </div>

            <div className="postItem__footer">
                <InertiaLink href={`/post/${postId}`}>Read</InertiaLink>
            </div>
        </div>
    );
}

export default postItem;
