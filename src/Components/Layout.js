import React, { Component } from "react";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { jobs: this.props.data, }
    }
    render() { 
        return ( 
            <>
                <h1>Real Topic</h1>
                {/* {this.props.data.map((job, i) => (
                    <div className="preview" key={i}>
                        <p>{job.company}</p>
                    </div>
                ))} */}

                {console.log(this.state.data)}
                
               
            </>
         );
    }
}
 
export default Layout;