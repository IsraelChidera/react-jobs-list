import React from 'react';


function Jobs({results}) {
    console.log(results)
    // let keywords = [...tools, ...languages];
    return (
        <>
            {results.map((job) => (
                <div className="data-card" key={job.id}>
                    <div className="data-card-flexed">
                        <div className="card-flexed">
                            <div className="logo"> 
                                <img src={job.logo} alt="company-logo" /> 
                            </div>
                            <div className="details">
                                <div className="details-one">
                                    <h4> { job.company } </h4>
                                    {job.new && <span>new!</span>}
                                    {job.featured && <span>featured</span>}
                                </div> 

                                <h3> { job.position } </h3>

                                <div className="details-two">
                                    <p>{ job.postedAt }</p>
                                    <p> { job.contract }</p>
                                    <p> { job.location } </p>
                                </div>

                            </div>
                        </div>

                        <div className="card-jobs-type">
                            <button disabled>{job.role}</button>
                            <button disabled>{job.level}</button>
                            <button disabled>{job.languages}</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Jobs
