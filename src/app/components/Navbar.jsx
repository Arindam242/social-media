import { Input, Avatar } from "@mantine/core";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className={"w-full h-20 bg-white"}>
      <div
        className={
          "max-w-7xl h-full mx-auto flex items-center  justify-between"
        }
      >
        <h1 className={"text-3xl font-bold font-poppins cursor-pointer"}>
          Social
        </h1>
        <Input
          icon={<BiSearch />}
          variant="filled"
          radius="lg"
          size="30px"
          inputMode={"text"}
        />
        <div className="flex space-x-5 cursor-pointer">
          <Avatar radius="lg" color="green" />
          <Avatar radius="lg" color="red" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
