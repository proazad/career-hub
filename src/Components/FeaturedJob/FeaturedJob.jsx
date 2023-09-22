import PropTypes from "prop-types";
import { FaLocationDot, FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
const FeaturedJob = ({ featuredJob }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = featuredJob;
  return (
    <div className="border border-gray-200 p-5 space-y-6 rounded-md">
      <img src={logo} alt={job_title} draggable="false"></img>
      <div>
        <h3 className="text-2xl font-extrabold">{job_title}</h3>
        <p className="text-xl font-semibold text-gray-400">{company_name}</p>
      </div>
      <div className="space-x-4">
        <span className="border border-violet-400 rounded-md text-base font-bold text-violet-400 px-4 py-2">
          {remote_or_onsite}
        </span>
        <span className="border border-violet-400 rounded-md text-base font-bold text-violet-400 px-4 py-2">
          {job_type}
        </span>
      </div>
      <div className="flex gap-5">
        <span className="flex gap-2 text-xl font-medium text-gray-400">
          <FaLocationDot />
          {location}
        </span>
        <span className="flex gap-2 text-xl font-medium text-gray-400">
          <FaDollarSign />
          Salary: {salary}
        </span>
      </div>
      <Link to={`/job/${id}`}>
        <button className="border hover:border-violet-400 bg-violet-400 hover:bg-inherit rounded-md text-base font-bold text-white duration-300 hover:text-violet-400 px-4 py-2">
          View Details
        </button>
      </Link>
    </div>
  );
};
FeaturedJob.propTypes = {
  featuredJob: PropTypes.object,
};
export default FeaturedJob;
