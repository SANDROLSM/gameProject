import React from 'react';
import crystalImg from '../../assets/crystal.png'
import './CrystalCart.css';
import menu_bar from '../../assets/menu_bar.png'
import { Link } from 'react-router-dom';
import { CrystallContext } from '../../App';

function CrystalCart(props) {

    const {crystallNumber} = React.useContext(CrystallContext)

    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <Link to='/navigation'>
                        <img src={menu_bar} />
                    </Link>
                </div>

                <div className="col">
                    <span className='crystalNumber'>{crystallNumber}</span>
                    <img src={crystalImg} />
                </div>
            </div>
        </div>
    );
}

export default CrystalCart;