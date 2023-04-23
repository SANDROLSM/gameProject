import React  from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import CrystalCart from "../CrystallCart/CrystalCart";
import { CrystallContext } from "../../App";

function MyStickers() {
   
    

    const {newStickers} = React.useContext(CrystallContext)


    return (
        <div>
        <CrystalCart />
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        { newStickers.length > 0 &&
        <h1 className="text-light  mt-2 text-center zagolovok">Мои Стикеры</h1>
            }
            <div className="container ">
                <div className="row text-center mt-3 ">
                    <div className="col md-6 my-1">
                    { newStickers.length > 0 &&         // проверка на наличие стикеров уже купленных
                        newStickers.map((value, index) => (         //используем методам map чтобы пробежаться по массиву и на каждый элемент вызвать функцию(отрендерить стикеры)
                                    <img key={index} className="images_lvl" src={value} />
                            ))
                    }
                    { newStickers.length === 0 &&  // если не куплены стикеры, то условным рендером показываем надпись "еще нет стикеров"
                       <h2 className="text-light  mt-2 text-center zagolovok">У вас еще нет стикеров</h2>
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default MyStickers