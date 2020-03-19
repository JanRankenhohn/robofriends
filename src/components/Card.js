import React from 'react';

const Card = ({ name, mail, imgSource}) => {
    return (
        <div>
            <img alt='photo' src={imgSource} />
            <div>
                <h2>{name}</h2>
                <p>{mail}</p>
            </div>
        </div>
    );
}

export default Card;