import React from 'react';
import Style from "../styles/pages/informationCompany.module.css";
import Img1 from "../public/img/img1.jpg"
import Quienes1 from "../public/audio/quienes1.mp3"
import AmorPorLosAnimales from "../public/audio/Amor por los animales.mp3"
import Responsabilidad from "../public/audio/Responsabilidad.mp3"
import Transparencia from "../public/audio/transparencia.mp3"
import Eficiencia from "../public/audio/eficiencia.mp3"
import TrabajoEnEquipo from "../public/audio/Trabajo en equipo.mp3"
import Img4 from "../public/img/img4.jpg";
import Img3 from "../public/img/img3.jpg";
import Img5 from "../public/img/img5.jpg";


const InformationCompany = () => {
  return (
    <>
    
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <div className="quienes-somos">  

      <div className={Style.contenedor}>
        <div className={Style.txt1}>        
          <img src={Img1} alt="" width="600" height="400" />
          <br />      
          <br />
          <p>
            Somos un equipo apasionado por los animales y comprometidos con su
            bienestar. Creemos en el poder transformador del amor y el cuidado
            para cambiar la vida de miles de mascotas en situación de abandono o
            refugio guiándolos a la página oficial para la respectiva adopción.
          </p>
          <br />          
          <audio src={Quienes1} controls></audio>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className={Style.valores}>
        <h4 style={{fontSize: '50px', }}><strong>NUESTROS VALORES</strong></h4>
      </div>
        <br />
        <br />
        <br />
        <br />
        <br />

      <div className={Style.contenedor}>
        <div className={Style.txt1}>
          <h2 className={Style.valores}>AMOR POR LOS ANIMALES</h2>
          <br />
          <p>
            Creemos en el poder del amor y el cuidado para transformar la vida de
            los animales.
          </p>          
          <br />
          <audio src={AmorPorLosAnimales} controls></audio>
        </div>
        <br />        
        <div className={Style.txt1}>
          <h2 className={Style.valores}>RESPONSABILIDAD</h2>
          <br />
          <p>
            Promovemos la tenencia responsable de mascotas, basada en el respeto
            y el compromiso.
          </p>
          <br />          
          <audio src={Responsabilidad} controls></audio>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className={Style.contenedor}>
        <div className={Style.txt1}>
        <br />
          <h2 className={Style.valores}>TRANSPARENCIA</h2>
          <br />
          <p>
            Operamos con transparencia y ética, brindando información clara y
            confiable a nuestros usuarios.
          </p>
          <br />
          <audio src={Transparencia} controls></audio>
        </div>
        <br />
        <div className={Style.txt1}>
        <br />
          <h2 className={Style.valores}>EFICIENCIA</h2>
          <br />
          <p>
            Optimizamos nuestros procesos para agilizar la adopción de mascotas y
            minimizar el tiempo que pasan en refugios.
          </p>
          <br />
          <audio src={Eficiencia} controls></audio>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={Style.contenedor}>
        <div className={Style.trabajo}>
          <h2>TRABAJO EN EQUIPO</h2>
          <br />
          <p>
            Colaboramos con diferentes actores para construir una comunidad
            comprometida con el bienestar animal.
          </p>
          <br />          
          <audio src={TrabajoEnEquipo} controls></audio>
        </div>
      </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      <div className={Style.contenedor}>
        <div className={Style.txt1}>
          <img src={Img4} alt="" width="250px" />
        </div>
        <div className={Style.txt1}>
          <img src={Img3} alt="" width="300px" />
        </div>
        <div className={Style.txt1}>
          <img src={Img5} alt="" width="250px" />
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <footer>
        <div className={Style.footercontainer}>
          <p>
            © 2024 BOMBELLBUR.PET &nbsp;&nbsp; ¡El amor es una palabra de cuatro patas! (Flores, 2022)
          </p>
        </div>
      </footer>
    </div>
    </>    
  );
};

export default InformationCompany;
