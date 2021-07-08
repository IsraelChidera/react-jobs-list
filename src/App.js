import './App.css';
import Layout from './Components/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const url = ' http://localhost:8000/jobs';

  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        // Object.keys(res.data);
        console.log(res.data);
        setJobs(res.data.jobs);
      })
  }, [])

  // useEffect(() => {
  //   console.log(jobs)
  // }, [jobs])



  return (
    <>
      
      { jobs && < Layout jobs={jobs} title="Hello World" /> }
    </>
  );
}

export default App;
