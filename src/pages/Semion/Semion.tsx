import { Link } from 'react-router-dom'

export const Semion = () => {
  return (
    <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      <p>
      Semion Zavalei
      </p>
      <p>
        <Link to="first-task">First task</Link>
      </p>
    </div>
  )
}