import { Link } from 'react-router-dom'

import css from './NastyaTask1.module.css'



export const NastyaTask1 = () => {
  return (
      <div>
      <p>
      <Link to={'/'}>Home</Link>
      </p>
      <h1>Кухни на заказ</h1>
      <div className={css.myText}>
        <p>Тепло домашнего очага по-прежнему ассоциируется с кухней, хотя сегодня камин стал декоративным аксессуаром, а дровяная печь осталась привилегией загородных домов. Тем не менее, все важные разговоры между родственниками, семейные обеды и уютные зимние посиделки с друзьями происходят именно здесь.</p>
        <p>Гостиная, совмещенная с кухней, лучше всего смотрится при максимальной маскировке встроенной техники. Главное достоинство, которое становится доступным при увеличении площади, – возможность вынести некоторые модули ближе к коридору.</p>
        <p>Любой дизайн интерьера – это отражение натуры владельца. Кухня-гостиная не исключение.</p>
      </div>

      <div className={css.allButton}>
        <div className={css.horizontalButton}>
        <button>Кнопка1</button> 
        <button>Кнопка2</button>
        <button>Кнопка3</button>
        </div>
      

      <div className={css.verticalButton}>
        <button>Кнопка4</button>
        <button>Кнопка5</button>
        <button>Кнопка6</button>
      </div>
      </div>
      

      <a href="https://kaksvoim.by/osipovichi-kuhni/" className={css.Kaksvoim}>
        Kaksvoim
      </a>
     
      
      <p>First task</p>
    </div>
  )
}
