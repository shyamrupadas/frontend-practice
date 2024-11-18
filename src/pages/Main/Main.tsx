import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <div>
      <h1>Frontend Practice</h1>
      <p>
        <Link to="/reference">Reference</Link>
      </p>
      <p>
        <Link to="/vyacheslav">Вячеслав</Link>
      </p>
      <p>
        <Link to="/maxim">Максим</Link>
      </p>
      <p>
        <Link to="/maria">Мария</Link>
      </p>
      <p>
        <Link to="/anya">Аня</Link>
      </p>
    </div>
  )
}
