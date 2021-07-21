import React from 'react'
import results from '../datan.json'
import Jobs from './Jobs'

function Data() {
    console.log(results);
    return (
        
        <>

            <Jobs results={results}/>

        </>
    )
}

export default Data



