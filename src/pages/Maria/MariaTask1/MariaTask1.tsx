import { Link } from 'react-router-dom'
import { useState } from 'react'

export const MariaTask1 = () => {
  const [numberOfButtonPressed, setNumberOfButtonPressed] = useState<number>(0)
  const [sumOfButtons, setSumOfButtons] = useState<number>(0)

  const handleClick = (event) => {
    setNumberOfButtonPressed(numberOfButtonPressed + 1)
    setSumOfButtons(sumOfButtons + Number(event.target.innerText))
  }

  return (
    <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      <div>
        <div>
          <button onClick={handleClick}>1</button>
          <button onClick={handleClick}>2</button>
          <button onClick={handleClick}>3</button>
        </div>
        <div>
          <button onClick={handleClick}>4</button>
          <button onClick={handleClick}>5</button>
          <button onClick={handleClick}>6</button>
        </div>
        <div>
          <button onClick={handleClick}>7</button>
          <button onClick={handleClick}>8</button>
          <button onClick={handleClick}>9</button>
        </div>
        <div>
          Было нажато <span>{numberOfButtonPressed}</span>
        </div>
        <div>
          Сумма <span>{sumOfButtons}</span>
        </div>
      </div>
    </div>
  )
}
