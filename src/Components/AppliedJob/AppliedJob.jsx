import PropTypes from "prop-types";
import { FaDollarSign, FaLocationDot } from "react-icons/fa6";
const AppliedJob = ({ job }) => {
  const {
    job_title,
    company_name,
    remote_or_onsite,
    location,
    logo,
    job_type,
    salary,
  } = job;
  return (
    <div className="flex justify-between items-center  gap-5 border border-violet-500 rounded-md p-5">
      <div className="flex gap-10">
        <div className="flex items-center justify-center bg-gray-300 p-5 w-36 rounded-md">
          <img src={logo} alt={job_title} draggable="false"/>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-extrabold">{job_title}</h2>
            <h2 className="text-2xl text-gray-400 font-medium">
              {company_name}
            </h2>
          </div>
          <div className="space-x-4">
            <span className="border border-violet-400 rounded-md text-base font-bold text-violet-400 px-4 py-2">
              {remote_or_onsite}
            </span>
            <span className="border border-violet-400 rounded-md text-base font-bold text-violet-400 px-4 py-2">
              {job_type}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1 text-lg font-medium text-gray-400">
              <FaLocationDot />
              {location}
            </span>
            <span className="flex items-center gap-1 text-lg font-medium text-gray-400">
              <FaDollarSign />
              Salary: {salary}
            </span>
          </div>
        </div>
      </div>

      <div>
        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">View Details</button>
        
      </div>
    </div>
  );
};
AppliedJob.propTypes = {
  job: PropTypes.object,
};
export default AppliedJob;
