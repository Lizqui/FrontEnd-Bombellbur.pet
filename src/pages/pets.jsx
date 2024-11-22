import React, { useEffect, useState } from "react";
import { getPets } from "../help/service/service";
import Cards from '../components/Cards';
const Pets = () => {

    const [pets, setPets] = useState([]);    
    const [authority, setAuthority] = useState(null);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await getPets();
                if (response.status === 200) {
                    setPets(response.data); 
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchPets();
    }, []);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userResponse = JSON.parse(storedUser);            
            setAuthority(userResponse.authorities[0].authority);
        }
    }, []);

    return (
        <div style={{marginTop:'5px'}}>               
                <Cards                
                cards={pets}  
                authority={authority}                                  
                />                                                                                                                                       
        </div>
    );          
}

export default Pets;
