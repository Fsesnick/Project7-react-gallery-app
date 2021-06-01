import React from 'react';
import { withRouter } from 'react-router-dom';
import Notfound from './Notfound';
import Photo from './Photo';

// Iteration through each pic  in the array and interpolates the value of the pic server and  id

const PhotoContainer = (props) => {

    const results = props.data;
    let pics;

    if (results.length > 0) {
        pics = results.map(pic => 
            <Photo url={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} />);
    } else{
        pics = <Notfound />
    }

//return the photos into the photo containter
return(
<div className="photo-container">
{(props.loading) ? <p>Loading</p> :
    (!props.data.length && !props.loading) ? <Notfound/> :
    <div>
        <h2> Results: {props.title} </h2>
        <ul> {pics} </ul>
    </div>
    }
</div>
);
}

export default withRouter(PhotoContainer);