// DogDetails.js

import React from "react";
import { useParams, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';


const DogDetails = ({dogs}) => {
    const {name} = useParams();

    const dog = dogs.find((dog)=> dog.name.toLowerCase()===name.toLowerCase());


    
    if(!dog) {
        return <div>Sorry, dog not found!</div>
    }

    return (
        <div>
          <h2>{dog.name}</h2>
          <img src={dog.src} alt={dog.name} />
          <h3>{dog.age} years old</h3>
          <ul>
            {dog.facts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
    
          <Link to="/">Go Back</Link>
        </div>
      );
    
}

export default DogDetails;
