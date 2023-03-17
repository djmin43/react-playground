import React from "react";

const commentsFetch = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["comment 1", "comment 2", "comment 3"]), 2000)
  );

const Comments = async () => {
  const comments = (await commentsFetch()) as string[];

  return (
    <div>
      {comments.map((comment) => (
        <li key={comment}>{comment}</li>
      ))}
    </div>
  );
};

export default Comments;
