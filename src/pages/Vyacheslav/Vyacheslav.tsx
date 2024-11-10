import { Link } from 'react-router-dom'

export const Vyacheclav = () => {
  return (
    <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      Vyacheslav
      <p>
        <Link to="first-task">FirstTask</Link>
      </p>
    </div>
  )
}
