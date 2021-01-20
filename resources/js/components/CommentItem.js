import React from "react";
import "../../css/CommentItem.css";

function CommentItem({ comment, date, author }) {
    return (
        <div className="commentItem">
            <div className="commentItem__info">
                <p>{author}</p>
                <p className="comment__date">{date}</p>
            </div>
            <div className="commentItem__body">
                <p>{comment}</p>
            </div>
        </div>
    );
}

export default CommentItem;
