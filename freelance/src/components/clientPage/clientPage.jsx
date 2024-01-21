import React from 'react'
import { Link } from 'react-router-dom'
import './clientPage.css'

function Client() {

  let allJobs = [{id:1,title:"title", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi at quod sapiente commodi. Placeat non ab itaque vitae possimus tempora labore repellat harum quia delectus ratione reprehenderit illo, iure consectetur reiciendis dolores nemo quo ullam soluta quas quae dolorem praesentium facere earum. Impedit quae, quasi voluptas laborum nobis dicta? Libero nulla non officiis, sequi quisquam ullam consectetur amet nihil minima, itaque totam recusandae repellendus necessitatibus. Sint non ratione nihil amet autem? Obcaecati alias commodi, praesentium omnis velit fugiat laudantium iusto voluptatem suscipit. Dolor, enim? Quaerat iusto exercitationem voluptatibus quos magnam.", price:"1500", skill:"React, Node, Express, MongoDB", isAccepted:"true", freelancerEmail:"tempmail.com", freelancerName:"John Doe", isCompleted:"false"},
  {id:2,title:"title", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi at quod sapiente commodi. Placeat non ab itaque vitae possimus tempora labore repellat harum quia delectus ratione reprehenderit illo, iure consectetur reiciendis dolores nemo quo ullam soluta quas quae dolorem praesentium facere earum. Impedit quae, quasi voluptas laborum nobis dicta? Libero nulla non officiis, sequi quisquam ullam consectetur amet nihil minima, itaque totam recusandae repellendus necessitatibus. Sint non ratione nihil amet autem? Obcaecati alias commodi, praesentium omnis velit fugiat laudantium iusto voluptatem suscipit. Dolor, enim? Quaerat iusto exercitationem voluptatibus quos magnam.", price:"100", skill:"React, Node, Express, MongoDB", isAccepted:"true", freelancerEmail:"tempmail.com", freelancerName:"John Doe", isCompleted:"true"}];

  return (
    <div className='clientPage'>
        <div className="container_ClientPage">
          <Link className="postbtn">Post A Job</Link>
          <div className="pending">
            <div className="Label_clientPage">Pending</div>
            <div className="list_clientPage">
              {allJobs.filter((job) => job.isAccepted === "true" && job.isCompleted === "false").map((job) => (
                <Link  to={`/freelancer/job/${job.id}`} className="job_clientPage" key={job.id}>
                <div className="jobTitle_clientPage">{job.title}</div>
                <div className="jobPrice_clientPage">${job.price}</div>
              </Link>))}
            </div>
          </div>
          <div className="past">
            <div className="Label_clientPage">Completed</div>
            <div className="list_clientPage">
              {allJobs.filter((job) => job.isCompleted === "true").map((job) => (
                <Link  to={`/freelancer/job/${job.id}`} className="job_clientPage" key={job.id}>
                  <div className="jobTitle_clientPage">{job.title}</div>
                  <div className="jobPrice_clientPage">${job.price}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}


export default Client