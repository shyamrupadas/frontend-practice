import { Link } from 'react-router-dom'

export const Maria = () => {
  return (
    <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      Maria
      <p>
        <Link to="first-task">FirstTask</Link>
      </p>
    </div>
  )
}
