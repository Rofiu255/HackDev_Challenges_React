//vimport React from "react";

// function PostDisplay() {
//     return (
//       <div data-testid="posts-container" className="flex wrap gap-10">
//         <div className="post-box">
//           <h3>{"Title"}</h3>
//           <p>{"Description"}</p>
//           <button>Delete</button>
//         </div>
//       </div>
//     );
//   }
  
//   export default PostDisplay; 

import React from "react";

function PostDisplay({ posts, handleDelete }) {
  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {posts.map((post, index) => (
        <div key={index} className="post-box">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;
