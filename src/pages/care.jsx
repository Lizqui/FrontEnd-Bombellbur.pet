import firstHandbook from '../public/img/primerManual.png'
import QRFirstHandbook from '../public/img/qrPrimerManual.png'
import secondHandbook from '../public/img/segundoManual.png'
import QRSecondHandbook from '../public/img/qrSegundoManual.jpg'
import adiestramiento from '../public/img/Adiestramiento.png'
import QrAdiestramiento from '../public/img/QrAdiestramiento.jpg'
import adiestramientoFelino from '../public/img/AdiestramientoFelino.png'
import QrAdiestramientoFelino from '../public/img/QrAdiestramientoFelino.jpg'
import style from '../styles/pages/care.module.css'

const Care = () => {
    return (
    <div className={style.continer}> 
        <div className={style.card}>
            <div className={`${style.face} ${style.front}`}>
                <img src={firstHandbook} />
                <h3>Cuidado para tus Perros </h3>            
            </div>
            <div className={`${style.face} ${style.back}`}>
            <img src={QRFirstHandbook} />                       
            </div>        
        </div>
        <div className={style.card}>
            <div className={`${style.face} ${style.front}`}>
                <img src={secondHandbook} />
                <h3>Cuidado para tus Gatos </h3>            
            </div>
            <div className={`${style.face} ${style.back}`}>
            <img src={QRSecondHandbook} />                       
            </div>        
        </div>
        <div className={style.card}>
            <div className={`${style.face} ${style.front}`}>
                <img src={adiestramiento} />
                <h3>Adiestramiento Canino</h3>            
            </div>
            <div className={`${style.face} ${style.back}`}>
            <img src={QrAdiestramiento} />                       
            </div>        
        </div>
        <div className={style.card}>
            <div className={`${style.face} ${style.front}`}>
                <img src={adiestramientoFelino} />
                <h3>Adiestramiento Felino</h3>            
            </div>
            <div className={`${style.face} ${style.back}`}>
            <img src={QrAdiestramientoFelino} />                       
            </div>        
        </div>
    </div>
    );
    
}

export default Care;