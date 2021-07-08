import React from 'react'

function Layout({jobs,title}) {
    

    return (
        
        <>
            <h1>{title}</h1>
           {/* {jobs.map((job, i) => (
               <div className="preview" key={i}>
                   <h2>Company Name: {job}</h2>
                   
               </div>
           ))} */}
        </>
    )
}

export default Layout
