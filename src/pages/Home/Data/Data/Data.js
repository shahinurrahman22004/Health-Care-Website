import React from 'react';

const Data = (props) => {
    const {name, img, para} = props.news;
    return (
        <div className="col-lg-4 col-md-4 mb-4">
            <div className="card-group">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{para}</p>
                </div>
                <button style={{width: "200px", margin: 'auto', marginBottom: '20px', border: 'none', borderRadius: '5px', color: 'white', padding:'10px'}} className="bg-primary fw-bold">Read More</button>
            </div>
            
        </div>
        </div>
    );
};

export default Data;