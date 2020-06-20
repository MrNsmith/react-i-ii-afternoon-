import React from 'react';

const Person = (props) => {
    return(
        <div>
            <span>{props.person.id}</span>
            
            <p>{props.person.name.first} {props.person.name.last} </p>
            
            <p>{props.person.city}</p>
            <p>{props.person.country}</p>
            <p>{props.person.employer}</p>
            <p>{props.person.title}</p>
            <p>{props.person.favoriteMovies}</p>
        </div>
    )
}
 export default Person;