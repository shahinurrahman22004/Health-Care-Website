import React from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const {doctorId} = useParams();
    return (
        <div>
            <h1>This is detail: {doctorId}</h1>
        </div>
    );
};

export default Detail;