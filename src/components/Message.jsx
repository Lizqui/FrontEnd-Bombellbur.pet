import { useState } from 'react';
import Card from 'react-bootstrap/Card';

function Message({opinions}) {
    const getTimeDifferenceMessage = (createdAt) => {
        const createdDate = new Date(createdAt);
        const currentDate = new Date();
        const diffInMs = currentDate - createdDate;
            
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
              
        if (diffInDays > 10) {
          return `Creado el ${createdDate.toLocaleDateString("es-ES")}`;
        } else if (diffInDays > 0) {
          return `Han pasado ${diffInDays} días.`;
        } else if (diffInHours > 0) {
          return `Han pasado ${diffInHours} horas.`;
        } else {
          return `Han pasado ${diffInMinutes} minutos.`;
        }
      };


  return (
    <Card style={{width: '900px', height: 'auto'}}>        
      {opinions.map((opinion, index) => (        
         <Card.Body key={index}>
         <Card.Header>{`Creado por ${opinion.applicationUser.userProfile.first_name} ${opinion.applicationUser.userProfile.last_name}`}</Card.Header>
           <blockquote className="blockquote mb-0" style={{margin: '10px'}}>         
             <p>
               {opinion.textOpinion}
             </p>
             <footer className="blockquote-footer">          
             {getTimeDifferenceMessage(opinion.date)}
             </footer>
           </blockquote>
         </Card.Body> 
      ))}            
    </Card>
  );
}

export default Message;