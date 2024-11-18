import { Link } from 'react-router-dom'

export const Anya = () => {
  return (
    <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      <p>
      Anya
      </p>
      <p>
        <Link to="first-task">First task</Link>
      </p>
    </div>
  )
}