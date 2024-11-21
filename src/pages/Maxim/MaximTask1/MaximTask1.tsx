// Здесь импортируется компонент Link который используется для перехода по внутренним ссылкам (роутам) приложения
// без перезагрузки страницы
import { Link } from 'react-router-dom'

// Здесь импортируется Модульный CSS
import css from './MaximTask1.module.css'

// 'это реакт компонент, доступный по адресу (роуту) /maxim/first-task'. Компонент объявлен как функция JS, возаращая JSX.
// Этот компонент (функция) может принимать пропсы (аргументы) - для того чтобы работать с ними.
export const MaximTask1 = () => {
  // В теле функции обычно пишется логика, которая понадобится для отображения. Мы пока это не трогаем.
  // Возвращает компонент специальный синтаксис: JSX. Он очень похож на HTML, но у него побольше возможностей.
  // Пока можешь просто учиться верстать на JSX
  return (
    <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      <h1>ПУТЯМИ ДОБРОТЫ</h1>
      <div className={css.myButtonContainer}>
        <button className={css.myButton}>Нажми меня 1</button>
        <button className={css.myButton}>Нажми меня 2</button>
        <button className={css.myButton}>Нажми меня 3</button>
      </div>
      <div className={css.myText}>
        <p>
          Когда человек сознательно или интуитивно выбирает себе в жизни какую-то цель
          жизненную задачу, он невольно дает себе оценку. По тому, ради чего человек
          живет, можно судить и о его самооценке - низкой или высокой. Если человек живет,
          чтобы приносить людям добро, облегчать их страдания, давать людям радость, то он
          оценивает себя на уровне этой своей человечности. Он ставит себе цель, достойную
          человека. Только такая цель позволяет человеку прожить свою жизнь с достоинством
          и получить настоящую радость. Да, радость! Подумайте: если человек ставит себе
          задачей увеличивать в жизни добро, приносить людям счастье, какие неудачи могут
          его постигнуть? Не тому помочь? Но много ли людей не нуждаются в помощи?
        </p>
      </div>
    </div>
  )
}
