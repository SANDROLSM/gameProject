import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './Intro.css';

function Intro() {
    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div className="card text-white  bg-info  border-info mx-1">
                <h5 className="card-header text-center  border-info">Правила игры</h5>
                <div className="card-body  ">
                    <ol className="text-light into_text" >
                        <li className="card-text ">Отвечай правильно на вопросы.</li >
                        <li className="card-text ">Получай кристаллы за каждый правильный ответ.</li >
                        <li className="card-text ">Покупай стикеры за кристаллы и хвастайся перед друзьями.</li >
                    </ol>
                </div>
                <div className="card-footer text-muted  border-info">
                </div>
            </div>

            <div className="text-center fixed-bottom mb-4">

                <Link to='/menu'>
                    <Button className="text-light align-items-center border-info " variant="info" size="lg" >Продолжить</Button>{' '}
                </Link>
            </div>
        </div>

    )
}
export default Intro
