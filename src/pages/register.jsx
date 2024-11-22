import React, { useState } from 'react';
import Style from "../styles/pages/register.module.css"
import { createUser } from '../help/service/service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user_name: '',
    password: '',
    profile: {
      user_identification: '',
      first_name: '',
      last_name: '',
      telephone_number: '',
      address: '',
      email: ''
    }
  })
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await createUser(formData);
      if (response.status === 200) {
        toast.success('Usuario creado exitosamente', 'Éxito');
        navigate('/login');
      }
      
    } catch (error) {
      toast.error('Error al crear el usuario', 'Error');
    }
  };

  return (
    <div className="registro">      
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <section className={Style.formRegister}>        
        <br /> <br />
        <form onSubmit={handleSubmit}> 
          <input className={Style.controls} type="number" name="nombres" id="nombres" placeholder="Número de identificación"
           onChange={(e) => setFormData({...formData, profile:{...formData.profile, user_identification: e.target.value}})} required/>
          <input className={Style.controls} type="text" name="nombres" id="nombres" placeholder="Nombres"
           onChange={(e) => setFormData({...formData, profile:{...formData.profile, first_name: e.target.value}})} required/>
          <input className={Style.controls} type="text" name="nombres" id="nombres" placeholder="Apellidos"
           onChange={(e) => setFormData({...formData, profile:{...formData.profile, last_name: e.target.value}})} required/>        
          <input className={Style.controls} type="number" name="nombres" id="nombres" placeholder="Número de telefono"
           onChange={(e) => setFormData({...formData, profile:{...formData.profile, telephone_number: e.target.value}})} required/>
          <input className={Style.controls} type="text" name="nombres" id="nombres" placeholder="Dirección"
           onChange={(e) => setFormData({...formData, profile:{...formData.profile, address: e.target.value}})} required/>          
          <input className={Style.controls} type="email" name="correo" id="correo" placeholder="Correo electronico" 
           onChange={(e) => setFormData({...formData, profile:{...formData.profile, email: e.target.value}})} required/>
          <input className={Style.controls} type="text" name="usuario" id="usuario" placeholder="Usuario"
           onChange={(e) => setFormData({...formData, user_name: e.target.value})} required/>
          <input className={Style.controls} type="password" name="contraseña" id="contraseña" placeholder="Contraseña" 
           onChange={(e) => setFormData({...formData, password: e.target.value})} required/>
          <div className={Style.wrapper}>   
          <input className={Style.btn} type="submit" value="REGISTRAR" />
          </div>
        </form>
      </section>

      <br />

      <div className={Style.wrapper}>       
        <br />
        <p className={Style.cuenta}>
          ¿Ya tienes una cuenta? &nbsp; &nbsp; <br /> Inicia sesión  <a href="/Login" style={{color: 'blue'}}>aqui</a>
        </p>
      </div>

      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

      <footer>
        <div className={Style.footercontainer}>
          <p>
            © 2024 BOMBELLBUR.PET &nbsp;&nbsp; ¡El amor es una palabra de cuatro patas! (Flores, 2022)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Register;