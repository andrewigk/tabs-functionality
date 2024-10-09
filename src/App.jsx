const url = 'https://www.course-api.com/react-tabs-project'
import { useState, useEffect } from 'react'
import Loading from './Loading.jsx'
import JobInfo from './JobInfo.jsx'
import BtnContainer from './BtnContainer.jsx'

const App = () => {
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [index, setIndex] = useState(0)

  const fetchJobs = async () => {
    try {
      const resp = await fetch(url)

      if (!resp.ok) {
        setIsError(true)
        setIsLoading(false)
        return
      }
      const data = await resp.json()
      setJobs(data)
    } catch (error) {
      console.log(error)
      setIsError(true)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])

  if (isLoading) {
    return <Loading></Loading>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }

  return (
    <main>
      <div className="jobs-center">
        <BtnContainer jobs={jobs} setIndex={setIndex}></BtnContainer>
        <JobInfo jobs={jobs} index={index}></JobInfo>
      </div>
    </main>
  )
}
export default App
