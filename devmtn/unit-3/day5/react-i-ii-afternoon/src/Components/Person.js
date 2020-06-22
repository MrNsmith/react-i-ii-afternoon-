import React from 'react';

const Person = (props) => {
    return(
        <div className = 'btn-outline'>
        <section className = 'info-card'>
            <span className = "id">{props.person.id}/{ 25 - props.person.id + 1}</span>
            
            <h1 className='name'>{props.person.name.first} {props.person.name.last} </h1>
            
            <p className= 'person-data'><b>From:</b> {props.person.city} {props.person.country}</p>
            <p className="person-data"><b>Job Title:</b> {props.person.title}</p>
            <p className='person-data'><b>Employer:</b> {props.person.employer}</p>
            <p className='fav'><b>Favorite Movies:</b><br/>{props.person.favoriteMovies}</p>
        </section>
        </div>
    )
}
 export default Person;