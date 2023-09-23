import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";
import { getStoredJobApplication } from "../utility/localstorage";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobsId = getStoredJobApplication();
    if (jobs.length > 0) {
      const appliedJobs = jobs.filter((job) => storedJobsId.includes(job.id));
      setAppliedJobs(appliedJobs);
      setDisplayedJobs(appliedJobs);
    }
  }, [jobs]);
  const handleDisplayedJobs = (filter) => {
    if(filter === 'all'){
      setDisplayedJobs(appliedJobs);
    }else if(filter === "remote"){
      const dispalyjobs = appliedJobs.filter(jobs=> jobs.remote_or_onsite === 'Remote');
      setDisplayedJobs(dispalyjobs);
    }else if(filter === 'onsite'){
      const diplayjobs = appliedJobs.filter(jobs=> jobs.remote_or_onsite === 'Onsite');
      setDisplayedJobs(diplayjobs);
    }
  };
  // if()
  return (
    <div className="container mx-auto my-16">
      <h2 className="text-4xl font-extrabold text-center">
        Applied Jobs : {appliedJobs.length}
      </h2>
      <div className="text-right">
        <details className="dropdown">
          <summary className="m-1 btn">Filter Job</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit">
            <li onClick={()=>handleDisplayedJobs("all")}>
              <a>All</a>
            </li>
            <li onClick={()=>handleDisplayedJobs("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={()=>handleDisplayedJobs("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 gap-5 my-10">
        {displayedJobs.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
