import { Link } from 'react-router-dom'
import {useState } from 'react'


export const MariaTask2 = () => {

const [isButtonPressed, setIsButtonPressed] = useState <number | null>(1);


  const handleClick = (buttonId: number) => {
    setIsButtonPressed(buttonId)
  }


  return (
    <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      <div>
        <div>
          <button onClick={() => handleClick(1)} style={{backgroundColor: isButtonPressed === 1 ? 'green' : 'grey' }}>1</button>
          <button onClick={() => handleClick(2)} style={{backgroundColor: isButtonPressed === 2 ? 'green' : 'grey' }}>2</button>
          <button onClick={() => handleClick(3)} style={{backgroundColor: isButtonPressed === 3 ? 'green' : 'grey' }}>3</button>
          <button onClick={() => handleClick(4)} style={{backgroundColor: isButtonPressed === 4 ? 'green' : 'grey' }}>4</button>
        </div>

      </div>
    </div>
    )
}