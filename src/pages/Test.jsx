import React from 'react';
import { useParams } from 'react-router-dom';

function Test(props) {
    let { id } = useParams()
    console.log("Here is Detail Movie")
    return (
        <div>
            <h2>
                Detail Movie {id}
            </h2>
        </div>
    );
}

export default Test;