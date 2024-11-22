import React from 'react';
import ButtonLoad from './ButtonLoad';
import { Col, Row, Card } from 'react-bootstrap';
import style from '../styles/components/cards.module.css'
import EditForm from './editForm'
import ButtonDelete from './ButtonDelete';
import CreateForm from './CreateFrom';

function BasicExample({ cards, authority }) {
  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 3) {
    groupedCards.push(cards.slice(i, i + 3));
  }  

  const authToken = localStorage.getItem('token');

  return (
    <div style={{marginTop: '120px'}}>
      {authority === 'ADMIN' && (
        <div style={{ margin: '20px', marginTop: '130px' }}>
          <CreateForm
            token = { authToken } 
           />
        </div>
      )}
      {groupedCards.map((group, index) => (
        <Row key={index} className='mb-4'>
          {group.map((card, idx) => (
            <Col key={idx} md={4}>
              <Card className={style.customCard} >
                <Card.Img variant="top" src={`http://localhost:8080${card.imagePath}`} className={style.cardImage} />
                <Card.Body>
                  <blockquote className="blockquote mb-0" style={{ fontSize: 'medium' }}>
                    <br />
                    <footer className="blockquote-footer">
                      {card.species} <cite title="Source Title">{`- ${card.name}`}</cite> 
                    </footer>
                    <p style={{ margin: '9px' }}>{`Es un peludo con ${card.age} años de edad. ${card.description}`}</p>
                    <div className={style.button}>
                      <div>
                        <ButtonLoad 
                          title={"¡Vamos a adoptarlo!"} 
                          url={card.url}
                        />                        
                      </div>
                      {authority === 'ADMIN' && (
                        <>
                          <div style={{ marginLeft: '100px' }}>
                            <EditForm 
                              id = { card.petId }
                              name = { card.name }
                              species = { card.species }
                              age = { card.age }
                              description = { card.description }                              
                              url = { card.url }
                              token = { authToken }
                            />
                          </div>
                          <div style={{ marginLeft: '10px' }}>
                            <ButtonDelete 
                              id={card.petId}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default BasicExample;
