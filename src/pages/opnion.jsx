import React, { useEffect, useState } from "react";
import { getOpinion, createOpinion, getOpinionByUser } from '../help/service/service'
import Message from "../components/Message"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';
const Opinion = () => {

       
    const user = JSON.parse(localStorage.getItem('user'));        
    const [message, setMessage] =  useState([]);    
    const [name] = useState(user ?.userProfile.first_name || null);
    const [userData, setUserData] = useState(
        user
          ? {
              id_user: user.userId,
              text: "",
            }
          : null
      );
    
    useEffect(() => { 
        const fetchOpinion = async () =>{
            try {                 
                const response = user ? await getOpinionByUser(user.userId) : await getOpinion();                
                if(response.status === 200) {
                    console.log('Datos recibidos:', response.data);
                    setMessage(response.data);
                }
            } catch (error) {
                console.error(error)
            }
        }
    fetchOpinion();
    }, [])       

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {            
          const response = await createOpinion(userData);
          if (response.status === 200) {                        
            window.location.reload();
          }
          
        } catch (error) {
          toast.error('Error al crear el usuario', 'Error');
        }
      };

    return (
        <div style={{marginTop: '140px', marginLeft: '50px', marginBottom: '60px'}}>          
        {user ? ( <Form onSubmit={handleSubmit}>
                <Row className="align-items-center">        
                    <Col sm={3} className="my-1">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>{`${name}, Aquí puede dejar un comentario frente a la página`}</Form.Label>
                            <Form.Control as="textarea" rows={3} size="sm" style={{width:'800px'}} onChange={(e) => setUserData({...userData, text: e.target.value})} />
                        </Form.Group>
                    </Col>       
                    <Col xs="auto" className="my-1" style={{textAlign: 'right'}}>
                        <Button type="submit" style={{width:'90px', marginLeft: '510px', marginTop: '6px'}} className="bi bi-send"></Button>
                    </Col>
                </Row>
            </Form>) : null}
                         
            <Message
               opinions={message}
            />
        
        </div>        
    );

}

export default Opinion;