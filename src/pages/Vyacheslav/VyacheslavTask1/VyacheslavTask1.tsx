import { Link } from 'react-router-dom'

import css from './VyacheslavTask1.module.css'

export const VyacheslavTask1 = () => {
  return (
    <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      Добавь на эту страницу заголовок, пару абзацев любого текста. Пару любых кнопок,
      расположенных в одну линию по горизонтали и любую ссылку. Для стилизации используй
      CSS Модули. Вот пример стилизованного c помощью SCC модулей блока:
      <div className={css.myClass}>стилизованный div</div>
    </div>
  )
}
