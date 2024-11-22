import React, { useState, useEffect } from 'react';
import style from '../styles/pages/home.module.css';
import gato1 from '../public/img/gato1.jpg';
import perro1 from '../public/img/perro1.jpg';
import gato2 from '../public/img/gato2.jpg';
import perro2 from '../public/img/perro2.jpg';
import gato3 from '../public/img/gato3.jpg';
import perro3 from '../public/img/perro3.jpg';
import Mision from "../public/audio/Mision.mp3"
import Vision from "../public/audio/visión.mp3"
import PopUp from '../components/PopUp';


const Home = () => {

  const [ showModal, setShowModal ] = useState(false);

  useEffect (() => {
    setShowModal(true);
  }, []);

  const handleClose = () => setShowModal(false);

  return (
    <div className="App">      
      <br/>
      
      <PopUp
        showModal={showModal}
        handleClose={handleClose}
      />
      <div className={style.sliderBox}>
        <br/>
        <br/>
        <br/>
        <ul>
          <li>
            <img src={gato1} alt="" width="700px" />
          </li>
          <li>
            <img src={perro1} alt="" />
          </li>
          <li>
            <img src={gato2} alt="" />
          </li>
          <li>
            <img src={perro2} alt="" />
          </li>
          <li>
            <img src={gato3} alt="" />
          </li>
          <li>
            <img src={perro3} alt="" />
          </li>
        </ul>
      </div>

      <div className={style.contenedor}>
        <div className={style.txt1}>
          <h2 className={style.visionymision}>MISIÓN</h2>
          <br />
          <p>
            Facilitar la adopción de mascotas en Bogotá a través de una plataforma
            digital que conecta a animales en situación de abandono o refugio con
            familias responsables y amorosas, promoviendo la adopción responsable y
            el bienestar animal.
            <br />
          <br />
          <audio src={Mision} controls class="audio-1"  ></audio>
          </p>          
        </div>
        <br />
        <div className={style.txt1}>
          <h2 className={style.visionymision}>VISIÓN</h2>
          <br />
          <p>
            Ser la plataforma informativa de la alcaldía mayor de Bogotá, para la
            adopción de mascotas. Reconocida por su transparencia y eficiencia.
            Además, genera un impacto positivo en la vida de miles de animales y
            familias.
            <br />
            <br />
            <audio src={Vision} controls class="audio-1"  ></audio>
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer>
        <div className={style.footercontainer}>
          <p>  © 2024 BOMBELLBUR.PET &nbsp;&nbsp; ¡El amor es una palabra de cuatro patas! (Flores, 2022) </p>
        </div>
      </footer>


    </div>
  );
}

export default Home;