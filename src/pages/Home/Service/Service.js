import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {id, name, description, img} = props.service;
    return (
        <div className="card-group col-md-4 mb-4">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <Link to={`/details/${id}`}>
                    <button style={{width: "200px", margin: 'auto', marginBottom: '20px', border: 'none', borderRadius: '5px', color: 'white', padding:'10px'}} className="bg-primary fw-bold">Read More</button>
                </Link>
            </div>
            
        </div>
    );
};

export default Service;