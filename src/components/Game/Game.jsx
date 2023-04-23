import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import "./Game.css";
import Timer from "../Timer/Timer";
import SettingsContext from "../Timer/SettingsContext";
import ProgressLine from "../ProgressLine/ProgressLine"
import Button from 'react-bootstrap/Button';
import CrystalCart from "../CrystallCart/CrystalCart";
import { CrystallContext } from "../../App";
import OneLineButtons from "./OneLineButtons";
import AnotherLineButtons from "./AnotherLineButtons";


function Start() {


    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    function randomNumberInRange(min, max) {                      //функция, возвращающася рандомные целые числа(0 и 1 в нашем случае)
      return Math.floor(Math.random() * (max - min + 1)) + min;  
    }
    const handleClick = () => {
      setNum1(randomNumberInRange(0, 1))
      setNum2(randomNumberInRange(0, 1))
    };





    const { id } = useParams()   /* прокидываем через url цифру, на которую жмет пользователь, чтобы потом ее использовать для вычислений*/

    const [workMinutes, setWorkMinutes] = useState(1);
    const [filled, setFilled] = useState(0);
    const [secondNumber, setSecondNumber] = useState(1);
    const onClickProgress = () => {
        if (filled < 100) {
            setFilled(filled + 10)
        } else {
            setFilled(filled - 100)
        }
    }
    const onClickSecondNumber = () => {
        if (secondNumber < 10) {
            setSecondNumber(secondNumber + 1)
        } 
    }
    // для заполнения progressline


    const {crystallNumber, setcrystallNumber} = React.useContext(CrystallContext)


    const [isRight, setIsRight] = useState(false);
    const [isWrong1, setIsWrongButton1] = useState(false);
    const [isWrong2, setIsWrongButton2] = useState(false);
    const [isWrong3, setIsWrongButton3] = useState(false);

    const onClickCrystallProgress = () => {
        setcrystallNumber(crystallNumber + 1)
    }

    const toggleClassRight = () => {
        setIsRight(!isRight)
        if (isWrong1 === true) {
            setIsWrongButton1(!isWrong1)
        } else {
            setIsWrongButton1(isWrong1)
        }
        if (isWrong2 === true) {
            setIsWrongButton2(!isWrong2)
        } else {
            setIsWrongButton2(isWrong2)
        }
        if (isWrong3 === true) {
            setIsWrongButton3(!isWrong3)
        } else {
            setIsWrongButton3(isWrong3)
        }
    };
    const toggleClassWrongButton1 = () => {
        setIsWrongButton1(!isWrong1)
    };
    const toggleClassWrongButton2 = () => {
        setIsWrongButton2(!isWrong2)
    };
    const toggleClassWrongButton3 = () => {
        setIsWrongButton3(!isWrong3)
    };

 
    return (
        <div>
            <CrystalCart />
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <article className="timer">
                    <ProgressLine filled={filled} />
                </article>
                <main>
                    <SettingsContext.Provider value={{ workMinutes, setWorkMinutes, }}>
                        <div className="timer_timer"> {<Timer />}
                        </div>
                    </SettingsContext.Provider>
                </main>

                <div className="zagolovok">Сколько будет</div>
                <div className="container-lg">
                    <div className="row">
                        <div className="col mx-auto d-grid">
                            <a href="#" className="btn btn-primary btn-lg disabled" tabIndex="-1" role="button" aria-disabled="true">{secondNumber}</a>
                        </div>
                        <div className="col-2 mx-auto d-grid ">
                            <a href="#" className="btn btn-primary btn-lg disabled " tabIndex="-1" role="button" aria-disabled="true">X</a>
                        </div>
                        <div className="col mx-auto d-grid">
                            <a href="#" className="btn btn-primary btn-lg disabled" tabIndex="-1" role="button" aria-disabled="true">{id}</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 mx-auto d-grid my-3">
                            <a href="#" className="btn btn-primary btn-lg disabled" tabIndex="-1" role="button" aria-disabled="true">=</a>
                        </div>
                    </div>



                    {num1 === 1 &&
                        <>
                            <OneLineButtons isRight={isRight} toggleClassRight={toggleClassRight} onClickProgress={onClickProgress} onClickCrystallProgress={onClickCrystallProgress} id={id}
                                secondNumber={secondNumber} toggleClassWrongButton1={toggleClassWrongButton1} isWrong1={isWrong1} num2={num2} />

                            <AnotherLineButtons isRight={isRight} toggleClassWrongButton2={toggleClassWrongButton2} onClickProgress={onClickProgress} toggleClassWrongButton3={toggleClassWrongButton3} id={id}
                                secondNumber={secondNumber} toggleClassWrongButton1={toggleClassWrongButton1} isWrong2={isWrong2} isWrong3={isWrong3} />
                        </>
                    }

                    {num1 === 0 &&
                        <>
                            <AnotherLineButtons isRight={isRight} toggleClassWrongButton2={toggleClassWrongButton2} onClickProgress={onClickProgress} toggleClassWrongButton3={toggleClassWrongButton3} id={id}
                                secondNumber={secondNumber} toggleClassWrongButton1={toggleClassWrongButton1} isWrong2={isWrong2} isWrong3={isWrong3} />

                            <OneLineButtons isRight={isRight} toggleClassRight={toggleClassRight} onClickProgress={onClickProgress} onClickCrystallProgress={onClickCrystallProgress} id={id}
                                secondNumber={secondNumber} toggleClassWrongButton1={toggleClassWrongButton1} isWrong1={isWrong1} num2={num2} />
                        </>
                    }
                    <div className="gapButton"></div>
                    <div className="row">
                        <div className="col-6 mx-auto d-grid ">
                            {secondNumber === 10 ?
                                <Link to='/menu'
                                    className={isRight ? "text-light endButtonOnClick" : "endButton"}>
                                    <Button
                                        onClick={() => {
                                            alert('Вы закончили данный уровень. Выберите следующий!');
                                            toggleClassRight();
                                        }}
                                        className={isRight ? "text-light endButtonOnClick" : "endButton"}
                                        variant="info" size="lg" >Завершить</Button>
                                </Link>
                                :
                                <Button
                                    onClick={() => {
                                        onClickSecondNumber();
                                        toggleClassRight();
                                        handleClick();
                                    }}
                                    className={isRight ? "text-light" : "continue"}
                                    variant={"info"} size="lg" >Продолжить</Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Start
