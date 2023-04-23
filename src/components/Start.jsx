import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Start() {
    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <Link to='/intro'>
            <Button variant="info" size="lg" className="text-light ">Начать игру</Button>{' '}
            </Link>
        </div>
    )
}
export default Start
