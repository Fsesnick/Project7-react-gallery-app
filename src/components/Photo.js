import React from 'react';
/**
 * 
 * @param {*} props 
 * @returns A Photo component that displays the li and img elements.
 */
const Photo = props => (
    <li>
        <img src={props.url} alt=""/>
    </li>
);

export default Photo;