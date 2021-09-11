import { Avatar, Title, Text, Image } from "@mantine/core";
import React from "react";
import { AiFillLike, AiOutlineComment, AiOutlineBook } from "react-icons/ai";

const Post = () => {
  return (
    <div className="w-3/6 h-2/5 bg-white rounded-md px-5  py-7">
      <div className="flex space-x-3">
        <Avatar radius={"lg"} />
        <div>
          <Title order={5}>Arindam Roy</Title>
          <Text color={"gray"}>Delhi,India</Text>
        </div>
      </div>

      <Image className="my-2" src="/screenshot.png" fit="contain" />
      <div className="flex justify-between">
        <div className="flex space-x-5">
          <AiFillLike className="text-3xl" />
          <AiOutlineComment className="text-3xl" />
        </div>
        <AiOutlineBook className="text-3xl" />
      </div>
    </div>
  );
};

export default Post;
