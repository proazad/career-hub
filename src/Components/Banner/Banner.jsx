import bannerImage from "../../../public/assets/images/user.png";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-5 pt-5">
        <div className="flex-1 space-y-4 ">
          <h1 className="text-7xl font-extrabold line-5">
            One Step <br /> Closer To Your <br /> <span className="text-violet-500">Dream Job</span>
          </h1>
          <p className="font-semibold text-lg">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className="btn bg-violet-500 hover:text-violet-500 text-xl text-white">Get Started</button>
        </div>
        <div className="flex-1">
          <img src={bannerImage} alt="" draggable="false" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
