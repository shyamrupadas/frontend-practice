import { Link } from 'react-router-dom'

export const Nastya = () => {
  return (
    <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      <p>Nastya</p>
      <p>
        <Link to="first-task">First task</Link>
      </p>
    </div>
  )
}
