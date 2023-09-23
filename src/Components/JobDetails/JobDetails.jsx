import { AiOutlineDollarCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  MdWorkOutline,
  MdCall,
  MdMailOutline,
  MdOutlineLocationOn,
} from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../utility/localstorage";
const JobDetails = () => {
  const Jobs = useLoaderData();
  const { id } = useParams();
  const job = Jobs.find((job) => job.id === parseInt(id));
  const {
    job_title,
    educational_requirements,
    experiences,
    job_description,
    job_responsibility,
    contact_information,
    salary,
  } = job;
  const { phone, email, address } = contact_information;
  const handleApplyJob = () => {
    saveJobApplication(id);
    toast.success("You have applied Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div className="my-20 container mx-auto px-2 lg:px-0">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <h2 className="text-5xl font-extrabold text-center">Job Details</h2>
      <div className="grid grid-cols-6 gap-5 py-10">
        <div className="col-span-4 space-y-5">
          <div>
            <p>
              <span className="text-base font-bold">Job Description :</span>
              {job_description}
            </p>
          </div>
          <div>
            <p>
              <span className="text-base font-bold">Job Responsibility :</span>
              {job_responsibility}
            </p>
          </div>
          <div>
            <span className="text-base font-bold">
              Educational Requirements :
            </span>
            <p>{educational_requirements}</p>
          </div>
          <div>
            <span className="text-base font-bold">Experiences :</span>
            <p>{experiences}</p>
          </div>
        </div>
        {/* Sidebar  */}
        <div className="col-span-2">
          <div className="bg-violet-100 p-5 rounded-md mb-5">
            <div className="space-y-4 mb-5">
              <h2 className="text-2xl font-bold pb-4 border-b border-violet-400">
                Job Details
              </h2>
              <div className="flex items-center my-5 gap-3">
                <AiOutlineDollarCircle></AiOutlineDollarCircle>
                <span className="font-bold">Salary :</span>
                <span>{salary} (Per Month)</span>
              </div>
              <div className="flex items-center my-5 gap-3">
                <MdWorkOutline></MdWorkOutline>
                <span className="font-bold">Job Title :</span>
                <span>{job_title}</span>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold pb-4 border-b border-violet-400">
                Contact Information
              </h2>
              <div className="flex items-center gap-3">
                <MdCall className="text-xl"></MdCall>
                <p>
                  <span className="font-bold">Phone :</span>
                  <span>{phone}</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MdMailOutline className="text-xl"></MdMailOutline>
                <p>
                  <span className="font-bold">Email : </span>
                  <span>{email}</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineLocationOn className="text-xl"></MdOutlineLocationOn>
                <p>
                  <span className="font-bold">Address : </span>
                  <span>{address}</span>
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={handleApplyJob}
            className="w-full btn bg-violet-400 text-white hover:text-violet-400 hover:border-violet-400"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
