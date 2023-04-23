import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Navigation.css';
import { Link } from "react-router-dom";
import CrystalCart from "../CrystallCart/CrystalCart";

function Navigation() {
    return (
        <div>

            <CrystalCart />
            <div className="container flex-column min-vh-100 my-5">
                <div className="row">
                    <div className="col w-50 mx-auto my-3">
                        <Link to='/intro' className="text-light button_menu">
                            <Button className="text-light button_menu" variant="info" size="lg" >Правила</Button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col w-50 mx-auto my-3">
                        <Link to='/menu' className="text-light button_menu">
                            <Button className="text-light button_menu" variant="info" size="lg" >Уровни</Button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col w-50 mx-auto my-3">
                        <Link to='/shop' className="text-light button_menu">
                            <Button className="text-light button_menu" variant="info" size="lg" >Магазин Стикеров</Button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col w-50 mx-auto my-3">
                        <Link to='/stickers' className="text-light button_menu">
                            <Button className="text-light button_menu" variant="info" size="lg" >Мои Стикеры</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navigation