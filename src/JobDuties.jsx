import { AiOutlineDoubleRight } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'

const JobDuties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        const id = uuidv4()
        return (
          <div className="job-desc" key={id}>
            <AiOutlineDoubleRight className="job-icon"></AiOutlineDoubleRight>
            <p>{duty}</p>
          </div>
        )
      })}
    </div>
  )
}
export default JobDuties
