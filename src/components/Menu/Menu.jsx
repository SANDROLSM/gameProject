import React from "react"
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/4.png'
import five from '../../assets/5.png'
import six from '../../assets/6.png'
import seven from '../../assets/7.png'
import eight from '../../assets/8.png'
import nine from '../../assets/9.png'
import ten from '../../assets/10.png'
import { Link } from "react-router-dom";
import CrystalCart from "../CrystallCart/CrystalCart";




function Menu() {

    const images = [one, two, three, four, five, six, seven, eight, nine, ten]    

    return (
        <div>
            <CrystalCart />
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <h1 className="text-light  mt-2 text-center zagolovok">Выберите уровень</h1>
                <div className="container ">
                    <div className="row text-center mt-3">
                        <div className="col md-6 my-4 images_lvl">
                            {
                                images.map((value, index) => (                      //используем метод map чтобы пробежаться по массиву и вызвать функцию на каждый элемент => рендерим наши 
                                                                                    //картинки  и прокидываем значение индекса дальше, чтобы вытащить цифру и использовать ее как пременную уровня
                                    <Link key={index} to={`/game/${index + 1}`}>     
                                        <img className="images_lvl" src={value} />
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu
