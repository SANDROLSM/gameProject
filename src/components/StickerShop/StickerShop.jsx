import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import CrystalCart from "../CrystallCart/CrystalCart";
import { CrystallContext } from "../../App";
import './StickerShop.css';

function Start() {
   
    

    const {rerenderStickers, stickers} = React.useContext(CrystallContext)    //переменные из контекста
   
        

    return (
        <div>
        <CrystalCart />
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <h1 className="text-light  mt-2 text-center zagolovok">Магазин Стикеров</h1>
            <h1 className="text-light  mt-2 text-center zagolovok1">Стоимость : 10 кристаллов</h1>
            <div className="container ">
                <div className="row text-center mt-3 ">
                    <div className="col md-6 my-1">
                        {
                            stickers.map((value, index) => (
                                    <img 
                                    onClick={() => rerenderStickers(value)} 
                                    key={index} className="images_lvl" src={value} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Start