import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function AnotherLineButtons({isRight, isWrong3, toggleClassWrongButton2,
    secondNumber, toggleClassWrongButton3, isWrong2, id}) {
    return (
        <div className={isRight ? "right_answer row" : "text-light row"}>
                    <div className="col-6 mx-auto d-grid my-2">
                        <Button
                            onClick={() => toggleClassWrongButton2()}
                            className={isWrong2 ? "wrong_answer" : "text-light"}
                            variant={isWrong2 ? "danger" : "info"} size="lg" >{id * secondNumber - 1}</Button>{' '}
                    </div>
                    <div className="col-6 mx-auto d-grid my-2">
                        <Button
                            onClick={() => toggleClassWrongButton3()}
                            className={isWrong3 ? "wrong_answer" : "text-light"}
                            variant={isWrong3 ? "danger" : "info"} size="lg" >{id * secondNumber + 2} </Button>{' '}
                    </div>
                </div>
    )
}
export default AnotherLineButtons
