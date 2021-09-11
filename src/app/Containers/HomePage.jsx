import Navbar from "../components/Navbar";
import PostSection from "./PostSection";

const HomePage = () => {
  return (
    <div className={"w-full h-full overflow-y-hidden bg-gray-300"}>
      <Navbar />
      <PostSection />
    </div>
  );
};

export default HomePage;
