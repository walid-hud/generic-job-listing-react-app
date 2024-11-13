import Hero from "../components/Hero"
import HomeCards from '../components/HomeCards'
import JobListings from "../components/JobListings"
import V_all from "../components/V_all"


const HomePage = () => {
  return (<>
    <Hero></Hero>
    <HomeCards></HomeCards>
    <JobListings recent={true} ></JobListings>
    <V_all></V_all>
  </>)
}

export default HomePage
