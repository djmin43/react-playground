"use client";
import React, { useState } from "react";

const EditableComments = ({
  comments: originalComments,
}: {
  comments: string[];
}) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(originalComments);

  return (
    <div>
      {comments.map((comment) => (
        <li key={comment}>{comment}</li>
      ))}
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        onClick={() => {
          setComments([...comments, newComment]);
          setNewComment("");
        }}
      >
        add comment
      </button>
    </div>
  );
};

export default EditableComments;
