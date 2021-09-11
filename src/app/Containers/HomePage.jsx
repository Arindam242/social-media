import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { login } from "../Redux/userSlice";
import PostSection from "./PostSection";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:5000/user").then((user) => {
      dispatch(login(user));
    });
  }, []);
  const user = useSelector(user);
  return (
    <div className={"w-full overflow-y-hidden h-full bg-gray-300 "}>
      <Navbar />
      <PostSection />
    </div>
  );
};

export default HomePage;
