import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [jobslength, setJobLength] = useState(4);
  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);
  return (
    <div className="container mx-auto my-20">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
        <p className="text-base font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 my-8">
        {featuredJobs.slice(0, jobslength).map((featuredJob) => (
          <FeaturedJob
            key={featuredJob.id}
            featuredJob={featuredJob}
          ></FeaturedJob>
        ))}
      </div>
      <div className={jobslength === featuredJobs.length ? 'hidden' : 'text-center'}>
        <button onClick={()=> setJobLength(6)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">See All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
