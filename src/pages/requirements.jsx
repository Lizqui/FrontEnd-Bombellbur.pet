import React from 'react';
import Style from "../styles/pages/requeriments.module.css"
import Requisitos from "../public/audio/Requisitos.mp3"


const Requirements = () => {
  return (
    <div className={Style.requisitos}>

      <br /> 
      <br /> 
      <br /> 
      <br />     
      <h1 className={Style.requisitos}>REQUISITOS PARA ADOPTANTES</h1>    
      <br /> 
      <br />   
      <div className={Style.txt1}>
        <p>
          Queremos asegurarnos de que nuestros peluditos encuentren hogares
          permanentes y adecuados, por lo que tenemos requisitos mínimos para
          los adoptantes.
        </p>
        <br />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;* La persona responsable del peludito debe ser mayor de 20 años.</p>
        <br />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;* Diligencia el Pre-formulario de Adopción.</p>
        <br />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;* Los datos ingresados serán verificados por funcionarios de la Fundación (esta verificación tarda 3 días hábiles).</p>
        <br />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;* Si tu solicitud y todo está en orden, nos contactaremos contigo para coordinar el día en que el peludito que escogiste
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; llegue a tu casa.
        </p>
        <br />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;* Visita domiciliaria para validar el lugar donde vivirá el peludito.</p>
        <br />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;* Es importante tener el tiempo y el espacio para que tú y ellos estén muy bien.</p>
        <br />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;* Es importante contar con estabilidad económica, desde el primer momento que llegue a tus manos será una gran
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;responsabilidad y requerirá de muchos cuidados y minimos para vivir feliz.
        </p>
        <br />

        <br />
        <h4>Recuerda, todos han sido rescatados.</h4>
        <br />

        <p>&nbsp;&nbsp; Da siguiente si quieres ver los animales para adoptar y te direccionaremos a la página oficial</p>
        <br />
        <br />

        <audio src={Requisitos} controls className="audio"></audio>

        <a href="/Login">
          <div className={Style.container}>
            <button className={Style.btn}>SIGUIENTE</button>
          </div>
        </a>

        <br />
      </div>

      <footer>
        <div className={Style.footercontainer}>
          <p>
            &nbsp;&nbsp; © 2024 BOMBELLBUR.PET &nbsp;&nbsp; ¡El amor es una palabra de cuatro patas! (Flores, 2022)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Requirements;
