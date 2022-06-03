import React from "react";

function Card({ tree }) {
  return (
    <div>
      <p>{tree.id}</p>
      {tree.child && <Card tree={tree.child} />}
    </div>
  );
}

export default Card;
