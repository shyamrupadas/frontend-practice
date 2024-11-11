import { Link } from 'react-router-dom'

export const Maxim = () => {
  return (
    <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      Maxim:
      <p>
        <Link to="first-task">FirstTask</Link>
      </p>
    </div>
  )
}
