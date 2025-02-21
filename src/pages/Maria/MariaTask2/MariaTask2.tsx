import { Link } from 'react-router-dom'
import { useState } from 'react'
import css from './MariaTask2.module.css'

function Button({ num, isActive, onClick }) {
  return (
    <button
      onClick={() => onClick(num)}
      className={`${css.buttonClass} ${isActive ? css.green : css.grey}`}
    >
      {num}
    </button>
  )
}
export const MariaTask2 = () => {
  const [isButtonPressed, setIsButtonPressed] = useState<number>(1)

  const handleClick = (buttonId: number) => {
    setIsButtonPressed(buttonId)
  }

  const buttons: number[] = [1, 2, 3, 4]

  return (
    <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      <div>
        <p> Нажата кнопка номер {isButtonPressed} </p>
        <div>
          {buttons.map((num) => (
            <Button
              num={num}
              isActive={isButtonPressed === num}
              onClick={() => handleClick(num)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
