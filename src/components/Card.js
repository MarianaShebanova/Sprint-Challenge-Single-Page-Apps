import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from "./CharacterCard";

const Card = (props) => {
    const [character, setCharacter] = useState();
    useEffect(() => {
        const id = props.match.params.id;
        // change ^^^ that line and grab the id from the URL
        // You will NEED to add a dependency array to this effect hook
        
        axios
            .get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => {
                setCharacter(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    if (!character) {
        return <div>Loading movie information...</div>;
    }
    return <CharacterCard character={character} />;
}

export default Card;
