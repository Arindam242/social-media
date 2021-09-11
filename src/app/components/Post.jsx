import { Avatar, Title, Text, Image } from "@mantine/core";
import React from "react";
import { BiLike, BiShareAlt } from "react-icons/bi";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";

const newPost = {
  name: "Arindam ROy",
  location: "Delhi,india",
  image: "/screenshot.png",
  likedBy: "anindita007",
  comments: "what garbage looking website is this",
};

const Post = () => {
  return (
    <div className="w-3/6 h-3/5 bg-white rounded-md px-5 my-4 py-7">
      <div className="flex space-x-3">
        <Avatar radius={"lg"} />
        <div>
          <Title order={5}>{newPost.name}</Title>
          <Text color={"gray"}>{newPost.location}</Text>
        </div>
      </div>

      <Image className="my-4" src="/screenshot.png" fit="contain" />
      <div className="flex justify-between">
        <div className="flex space-x-5">
          <BiLike className="text-3xl" />
          <FaRegComment className="text-3xl" />
          <BiShareAlt className={"text-3xl"} />
        </div>
        <FaRegBookmark className="text-3xl" />
      </div>

      <div className={"flex items-center my-2"}>
        <Avatar radius={"sm"} />
        <Text>
          Liked by <span className={"font-bold"}>{newPost.likedBy}</span>,and{" "}
          <span className={"font-bold"}>1993</span> others
        </Text>
      </div>
      <div>
        <Text>
          <span className={"font-bold mr-2"}>Allu0076</span>
          {newPost.comments}{" "}
        </Text>
      </div>
    </div>
  );
};

export default Post;
