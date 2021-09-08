import { Input } from "@mantine/core";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className={"w-full h-20 bg-white"}>
      <div
        className={
          "max-w-7xl h-full mx-auto flex items-center  justify-between"
        }
      >
        <h1 className={"text-3xl font-bold font-poppins"}>Social</h1>
        <Input
            style={{fontSize:"20px",}}
          icon={<BiSearch/>}
          variant="filled"
          radius="lg"
          size="30px"
            inputMode={"text"}
        />
      </div>
    </div>
  );
};

export default Navbar;
