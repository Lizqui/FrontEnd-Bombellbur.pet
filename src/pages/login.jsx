import React, { useState } from 'react';
import Styles from "../styles/pages/login.module.css"
import inicio from "../public/audio/iniciar sesión.mp3";
import { IconUser } from "../public/icons/iconUser"
import { IconUsername } from "../public/icons/iconUsername"
import { IconPassword } from "../public/icons/iconPassword"
import { toast } from 'react-toastify';
import { authenticationUser } from '../help/service/service';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [formData, setFormData] = useState({
    user_name: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {      
      const response = await authenticationUser(formData);
      if (response.status === 200) {        
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));                                   
        navigate('/Pets');  
        window.location.reload();        
      } 
      
    } catch (error) {
      toast.error('Datos Incorrectos')
    }
  };

  return (
    <>     
      <div className="iniciar-sesion">
        <div className={Styles.wrapper}>          
            <h1>
              <IconUser />
            </h1>
            <div>
              <audio src={inicio} controls className="audio"></audio>
            </div>
            <form onSubmit={handleSubmit}>
            <div className={Styles.inputBox}>
              <input type="text" placeholder="User Name" 
                onChange={(e) => setFormData({...formData, user_name: e.target.value})} required/>
              <i>
                <IconUsername />
              </i>
            </div>
            <div className={Styles.inputBox}>
              <input type="password" placeholder="Password" 
                onChange={(e) => setFormData({...formData, password: e.target.value})} required/>
              <i>
                <IconPassword />
              </i>
            </div>
            <button type="submit" className={Styles.btn}>
              INICIAR SESIÓN
            </button>
          </form>
          <div className={Styles.registerLink}>
            <p>
              ¿ No tienes una cuenta? <a href='/Register'>registrate ahora</a>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
