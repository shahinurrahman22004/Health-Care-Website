import React from 'react';
import Doctor from '../Doctor/Doctor';


const OurDoctors = [
    
    {
        img: 'https://i.ibb.co/Xyj9TZs/team1.jpg',
        name: 'Dr. Smile Jhon',
        Profetion: 'Orthopaedics',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    },

    {
        img: 'https://i.ibb.co/Y70dzPr/team2.jpg',
        name: 'Dr. Mark Jacobson',
        Profetion: 'Cardiology',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    },
    
    {
        img: 'https://i.ibb.co/s2BVXYb/team3.jpg',
        name: 'Dr. Jaka Alex',
        Profetion: 'Neurology',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    },

    {
        img: 'https://i.ibb.co/rbR53P0/team4.jpg',
        name: 'Dr. Alex Davidson',
        Profetion: 'Haematology',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    }

]

const Doctors = () => {
    return (
        <div id="doctors" className="container">
            <h1 className="text-primary mb-5 mt-5">Our Doctors</h1>
            <div className="row">
                {
                    OurDoctors.map(doctor => <Doctor key={doctor.name} doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;