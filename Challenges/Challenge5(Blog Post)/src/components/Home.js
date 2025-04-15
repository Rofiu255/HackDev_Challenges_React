// import React from "react";
// import Input from "./Input";
// import PostDisplay from "./PostDisplay";

// function Home() {
//   return (
//     <div className="text-center ma-20">
//       <div className="mb-20">
//         <Input />
//         <button data-testid="create-button" className="mt-10">
//           Create Post
//         </button>
//       </div>
//       <div className="posts-section">
//         <PostDisplay />
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import PostDisplay from "./PostDisplay";
import Input from "./Input";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const handleCreate = () => {
    if (title.trim() && description.trim()) {
      const newPost = { title, description };
      setPosts([...posts, newPost]);
      setTitle("");
      setDescription("");
    }
  };

  const handleDelete = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
        <button data-testid="create-button" className="mt-10" onClick={handleCreate}>
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default Home;
