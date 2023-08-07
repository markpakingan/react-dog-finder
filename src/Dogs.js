// Dogs.js file
import React from "react";
import { Link } from "react-router-dom";


const Dogs = ({dogs}) => {

    return (
        <div>
            <ul>
                {dogs.map((dog)=>(
                    <li key={dog.name}>
                    <Link to={`/dog/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dogs;