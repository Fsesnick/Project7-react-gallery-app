import React from 'react';

/** 
 * @returns A NotFound component for displaying a user-friendly message when the search returns no results.
 */
const NotFound = () => (
    <li className='not-found'>
        <h3> Oops! </h3>
        <h3>No Results Found</h3>
        <p>Please try again...</p>
    </li>
);

export default NotFound;