import { Route, Routes } from 'react-router-dom';
import './App.css';
import Start from './components/Start';
import Game from './components/Game/Game';
import StickerShop from './components/StickerShop/StickerShop';
import MyStickers from './components/MyStickers/MyStickers';
import Menu from './components/Menu/Menu';
import Navigation from './components/Navigation/Navigation';
import React, { useState } from 'react';

import bow from './assets/stickers/bow.png'
import accordion from './assets/stickers/accordion.png'
import error from './assets/stickers/error.png'
import brainstorming from './assets/stickers/brainstorming.png'
import chess from './assets/stickers/chess.png'
import crown from './assets/stickers/crown.png'
import earth from './assets/stickers/earth.png'
import football from './assets/stickers/football.png'
import goal from './assets/stickers/goal.png'
import helmet from './assets/stickers/helmet.png'
import horn from './assets/stickers/horn.png'
import joker_hat from './assets/stickers/joker_hat.png'
import medal from './assets/stickers/medal.png'
import number_one from './assets/stickers/number_one.png'
import pennant from './assets/stickers/pennant.png'
import rock_on from './assets/stickers/rock_on.png'
import signboard from './assets/stickers/signboard.png'
import sportShirt from './assets/stickers/sportShirt.png'
import strawberries from './assets/stickers/strawberries.png'
import trophy from './assets/stickers/trophy.png'
import Intro from './components/Into/Intro';

export const CrystallContext = React.createContext();
                      


function App() {

  const[crystallNumber, setcrystallNumber] = useState(0)   /*объявлем количество кристалло и стикеры(как в магазине, так и "моих стикерах", чтобы потом использовать их в контексте как 
  глобольные переменные, чтобы при перерендере страницы не исчезало количетсво ранее накопленных кристаллов и стикеров) */
  const [stickers, setStickers] = useState(
    [ bow, accordion, error, brainstorming, chess, crown, earth, football, goal, helmet, horn, joker_hat, medal, number_one, pennant, rock_on, signboard, sportShirt, strawberries, trophy
    ]
  )
  const [newStickers, setNewStickers] = useState([])
  
  

  const rerenderStickers = (value) => {
          if(crystallNumber >= 10) {                // Проверка на количество кристаллов( достаточно ли для покупки)
            setcrystallNumber(crystallNumber - 10);   //уменьшаем количество кристаллов при нажатии на стикер
            const filteredArray = stickers.filter((sticker) => sticker !== value ) // фильтруем массив стикеров и оставляем только те, на которые не нажали( не купили)
            setStickers(filteredArray)
            alert("Поздравляем вы приобрели новый стикер!");

           const deletedSticker = stickers.filter((sticker) => sticker === value)  // фильтруем массив стикеров и оставляем только те, на которые  нажали(  купили)
           const newStickersArray = [];
           const newStickersArray1 = newStickersArray.concat(deletedSticker) //сшиваем в один массив разные массивы стикеров, которые образуются принажатии
           setNewStickers(newStickers.concat(newStickersArray1)) // обновляем стикеры в "Моих стикерах"
          } else {
            alert('Недостаточно кристаллов')
          }

  }



  return (
    <div>
      <CrystallContext.Provider value={{crystallNumber,setcrystallNumber, stickers , rerenderStickers,newStickers}}>       {/* Прокидываем в контекст эти переменные */}
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/game/:id' element={<Game />} />
        <Route path='/shop' element={<StickerShop />} /> 
        <Route path='/navigation' element={<Navigation />} /> 
        <Route path='/stickers' element={<MyStickers />} /> 
      </Routes>
      </CrystallContext.Provider>
    </div>
  );
}

export default App;
