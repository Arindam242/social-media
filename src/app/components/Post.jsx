import { Avatar, Title, Text, Image } from "@mantine/core";
import React from "react";
import { BiLike, BiShareAlt } from "react-icons/bi";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";

const Post = ({ image, name, avatar, likes, comments }) => {
  return (
    <div className="w-3/6 h-3/5 bg-white rounded-md px-5 my-4 py-7">
      <div className="flex space-x-3">
        <Avatar radius={"lg"} src={avatar} />
        <div>
          <Title order={5}>{name}</Title>
          <Text color={"gray"}>{"Delhi,india"}</Text>
        </div>
      </div>

      <Image className="my-4" height={320} src={image} fit="contain" />
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
          Liked by
          <span className={"font-bold ml-2"}>{likes}</span> User
        </Text>
      </div>
      <div>
        <Text>{comments[0].content}</Text>
      </div>
    </div>
  );
};

export default Post;
