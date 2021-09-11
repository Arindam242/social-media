import React from "react";
import Post from "../components/Post";

const PostSection = () => {
    //TODO: remove the ugly scrollbar and make visible full post
  return (
    <div className="max-w-7xl mx-auto h-full overflow-y-scroll flex flex-col items-center my-5">
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostSection;
