import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className=' bg-light-blue dib br4 pa3 ma2 grow bw2 shadow-5'>
            <img alt='frisch' src={`https://robohash.org/${id}`} />
            <div>
                <h1> {name} </h1>
                <p> {email} </p>
            </div>
        </div>
    )
}

export default Card;

