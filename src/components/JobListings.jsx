import { useEffect, useState } from 'react'
import Job from '../components/Job'
import Sspinner from './Sspinner'

const JobListings = ({recent}) => {
  const [jobs , setJobs] = useState([])
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
    const fetchJobs = async ()=>{
      try{
      const res = await fetch('/api/jobs')
      const jobs = await res.json()
      recent ? setJobs(jobs.slice(0,3)) : setJobs(jobs)}
      catch(err){
        console.error('error fetching data' , err)
      }
      finally{
        setLoading(false)
      }

    }
    fetchJobs()
  } , [])
  return (
    <>
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {recent ? 'Recent jobs' : 'Browse jobs'}
        <Sspinner loading={loading}></Sspinner>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job , index)=>{return <Job key={job.id} job={job} ></Job>})}
          
        </div>
      </div>
    </section>
    </>
  )
}

export default JobListings


