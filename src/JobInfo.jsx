import JobDuties from './JobDuties.jsx'

const JobInfo = ({ jobs, index }) => {
  const { id, company, dates, title, duties } = jobs[index]
  return (
    <section className="jobs-info" key={id}>
      <h4>{title}</h4>
      <div className="job-company">{company}</div>
      <div className="job-date">{dates}</div>
      <JobDuties duties={duties}></JobDuties>
    </section>
  )
}
export default JobInfo
