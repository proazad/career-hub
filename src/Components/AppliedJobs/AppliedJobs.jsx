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
  const handleDisplayedJobs = (e) => {
    if (e.target.value === "all") {
      setDisplayedJobs(appliedJobs);
    } else if (e.target.value === "remote") {
      const dispalyjobs = appliedJobs.filter(
        (jobs) => jobs.remote_or_onsite === "Remote"
      );
      setDisplayedJobs(dispalyjobs);
    } else if (e.target.value === "onsite") {
      const diplayjobs = appliedJobs.filter(
        (jobs) => jobs.remote_or_onsite === "Onsite"
      );
      setDisplayedJobs(diplayjobs);
    }
  };

  return (
    <div className="container mx-auto my-16">
      <h2 className="text-4xl font-extrabold text-center">
        Applied Jobs : {appliedJobs.length}
      </h2>
      <div className="text-right">
        <select defaultValue={'all'}
          onChange={handleDisplayedJobs}
          className="select select-primary max-w-xs"
        >
          <option disabled value="fiter">
            Filter Job
          </option>
          <option value="all">
            All
          </option>
          <option value="remote">Remote</option>
          <option value="onsite">Onsite</option>
        </select>
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
