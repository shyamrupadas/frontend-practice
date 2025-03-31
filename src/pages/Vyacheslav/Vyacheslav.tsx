import { Link, NavLink } from 'react-router-dom'
import css from '../Vyacheslav/VyacheslavTask1/VyacheslavTask1.module.css'

export const Vyacheclav = () => {
  return (
    <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      Vyacheslav
      <h1>First task</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in eligendi inventore repellendus. Distinctio obcaecati iusto eveniet, est quod omnis minus optio reiciendis soluta, alias rerum consequatur laboriosam eaque a.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eius placeat. Maxime doloribus nemo sequi iusto delectus necessitatibus similique, non aut magnam. Facilis, nam obcaecati cupiditate rerum consectetur quaerat corporis.</p>
      <button className={css.myClass}>Add</button>
      <button className={css.myClass}>Delete</button>
      <p ><NavLink to="/">Главная</NavLink></p>
      <p>
        <Link to="first-task">FirstTask</Link>
      </p>
    </div>
  )
}
