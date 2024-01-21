
import './Freelancer.css'

import { Link } from 'react-router-dom';

function Freelancer(props) {

    return (
        <div className='freelancer_page'>
            <div className="logo">DeLancer</div>
            <div className="profile">
                <img src="" alt="" />
                img
            </div>
            <div className="content">
                <div className="tagLine">
                    Find the right freelance<br />service, right away
                </div>
                <div className="jobList">
                    {props.jobList.map((job) => (
                        <Link  to={`/freelancer/job/${job.id}`} className="job" key={job.id}>
                            <div className="description">
                                <div className="jobTitle">{job.title}</div>
                                <p className="jobDescription">{job.description}</p>
                            </div>
                            <div className="price">
                                <div className="jobPrice">${job.price}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Freelancer