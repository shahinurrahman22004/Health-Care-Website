import React from 'react';

const Doctor = ({doctor}) => {
    const {name, img, para, Profetion} = doctor;
    return (
        <div className="card-group col-md-6 mb-4">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <small>{Profetion}</small>
                    <p>{para}</p>
                </div>
                <button style={{width: "200px", margin: 'auto', marginBottom: '20px', border: 'none', borderRadius: '5px', color: 'white', padding:'10px'}} className="bg-primary fw-bold">Read More</button>
            </div>
            
        </div>
    );
};

export default Doctor;