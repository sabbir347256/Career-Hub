import { FaLocationDot } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
    const { logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo}alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex">
                    <h2 className="flex items-center "><FaLocationDot className="text-2xl mr-2"></FaLocationDot>{location}</h2>
                    <h2 className="flex items-center "><CiDollar className="text-2xl mr-2"></CiDollar>{salary}</h2>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;