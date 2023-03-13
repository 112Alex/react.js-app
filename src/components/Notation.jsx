import React, {useState} from "react";
import './notation.css'
import image from './0ac27589859f085440b26eeccac0bc8d.jpg'

const Notation = function () {

  const [num16, setNum16] = useState(NaN)
  const [num8, setNum8] = useState(NaN)
  const [num2, setNum2] = useState(NaN)

  function arrayer(number) {
    return ((""+number).split("").map(Number))
  }

  //let array16 = (""+num16).split("").map(Number)
  //console.log(array16)

  console.log(arrayer(num2))

  return (
    <div className="Notation">
      <div className="Notation__row">
        <div className="Notation__item">
          <p className="Notation__header">Среди приведённых ниже чисел, записанных в различных системах счисления, найдите минимальное и запишите его в ответ в десятичной системе счисления</p>
          <h4>Введите числа:</h4>
          <input type="text" onChange={event => setNum16(parseInt(event.target.value, 16))}/><sub> 16</sub>
          <input type="text" onChange={event => setNum8(parseInt(event.target.value, 8))}/><sub> 8</sub>
          <input type="text" onChange={event => setNum2(parseInt(event.target.value, 2))}/><sub> 2</sub>
          <p>Первое число в десятичной системе = {num16.toString(10)}</p>
          <p>Второе число в десятичной системе = {num8.toString(10)}</p>
          <p>Третье число в десятичной системе = {num2.toString(10)}</p>
        </div>
        <div className="Notation__item">
          <h4>Решение:</h4>
          <p>Первое число в двоичной системе = {num16.toString(2)}</p>
          <p>Второе число в двоичной системе = {num8.toString(2)}</p>
          <p>Третье число в двоичной системе = {num2.toString(2)}</p>
        </div>
        <div className="Notation__picture"><img src={image} alt="картинка не найдена" /></div>
      </div>
    </div>
  );
};

export default Notation
