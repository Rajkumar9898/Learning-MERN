import React from "react";
import { AiFillDelete } from "react-icons/ai";


function Post({ post }) {
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
           < AiFillDelete/>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (<span class="badge text-bg-primary hastag">{tag}</span>))}
        <div class="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} people 
        </div>
      </div>
    </div>
  );
}

export default Post;
