import Navbar from "../components/Navbar";
import HomeSection from "../sections/HomeSection";

const Home = () => {
  return (
    <>
      {" "}
      <div className="bg-black text-white">
        <Navbar />
        <HomeSection />
      </div>
    </>
  );
};

export default Home;
