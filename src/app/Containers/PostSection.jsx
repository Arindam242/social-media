import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const PostSection = () => {
  const [Posts, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((result) => setPost(result));
  }, []);

  console.log(Posts);

  //TODO: make visible full post

  return (
    <div className="max-w-7xl mx-auto h-full overflow-y-scroll flex flex-col items-center  my-10">
      {Posts.map((post) => (
        <Post
          key={post.id}
          image={post.image}
          name={post.user.name}
          avatar={post.user.avatar}
          likes={post.likes.length}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default PostSection;
