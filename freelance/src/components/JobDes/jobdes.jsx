import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams
import { Link } from 'react-router-dom';
import './jobdes.css';


function Jobdes(props) {
  const { id } = useParams();
  const job = props.jobList.find((job) => job.id === parseInt(id));
  
  if (!job) {
    return <div className='error_JobDes'>
      <div className="errorContainer">
        Job not found
      </div>
    </div>;
  }

  return (
    <div className="jobDesPage">
        <div className="jobDesContainer">
            <div className="upper_JobDes">
                <div className="jobTitle_JobDes">{job.title}</div>
                <p className="jobDescription_JobDes">{job.description}</p>
                <div className="skillsReq_JobDes"><span className='skillsReq_Label'>Skills Required</span><br />{job.skill}</div>
                <div className="clientDetails_Label">Client Details</div>
                <div className="clientDetails_JobDes">
                    <div className="clientName_JobDes">{job.clientName}</div>
                    <div className="clientEmail_JobDes">{job.clientEmail}</div>
                </div>
            </div>
            <div className="lower_JobDes">
                <div className="jobPrice_JobDes">${job.price}</div>
                <Link className="applyBtn">Apply</Link>
            </div>
        </div>
    </div>
  );
}

export default Jobdes;
