import { v4 as uuidv4 } from 'uuid'

const BtnContainer = ({ jobs, setIndex }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        const id = uuidv4()
        return (
          <button className="job-btn" key={id} onClick={() => setIndex(index)}>
            {job.company}
          </button>
        )
      })}
    </div>
  )
}
export default BtnContainer
