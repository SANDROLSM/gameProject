import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function OneLineButtons({isRight, toggleClassRight, onClickProgress, onClickCrystallProgress, id, 
    secondNumber, toggleClassWrongButton1, isWrong1, num2}) {
    return (
        <div className={isRight ? "right_answer row" : "text-light row"}>
        {num2 === 0 &&
        <>
        <div className="col-6 mx-auto d-grid my-2 ">
            <Button
                onClick={() => { toggleClassRight(); onClickProgress(); onClickCrystallProgress() }}   /* сравниваем правильный ответ и увеличиваем шкалу прогресса */
                className="text-light"
                variant={isRight ? "success" : "info"} size="lg">{id * secondNumber}</Button>{' '}
        </div>
        <div className="col-6 mx-auto d-grid my-2">
            <Button
                onClick={() => toggleClassWrongButton1()}
                className={isWrong1 ? "wrong_answer" : "text-light"}
                variant={isWrong1 ? "danger" : "info"} size="lg" >{id * secondNumber + 1}</Button>{' '}
        </div>
        </>
        }
        {num2 === 1 &&
        <>
        <div className="col-6 mx-auto d-grid my-2">
            <Button
                onClick={() => toggleClassWrongButton1()}
                className={isWrong1 ? "wrong_answer" : "text-light"}
                variant={isWrong1 ? "danger" : "info"} size="lg" >{id * secondNumber + 1}</Button>{' '}
        </div>
        <div className="col-6 mx-auto d-grid my-2 ">
            <Button
                onClick={() => { toggleClassRight(); onClickProgress(); onClickCrystallProgress() }}   /* сравниваем правильный ответ и увеличиваем шкалу прогресса */
                className="text-light"
                variant={isRight ? "success" : "info"} size="lg">{id * secondNumber}</Button>{' '}
        </div>
        </>
        }
    </div>
    )
}
export default OneLineButtons
