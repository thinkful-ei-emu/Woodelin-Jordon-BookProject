import React from 'react';

export default function Book(props) {

    return (
        <div>
            <h3 className="title">{props.title}</h3>
            <h4 className='author'>{props.authors}</h4>
            <h4 className="price">{props.price}</h4>
            <p className="description">{props.description}</p>
            <img src={props.img} alt="book img"></img>
        </div>

    );
}