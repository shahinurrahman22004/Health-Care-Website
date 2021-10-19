import React from 'react';
import Data from '../Data/Data';


const Newses = [
    
    {
        img: 'https://i.ibb.co/h8btkGp/1.jpg',
        name: 'DIFFERENT TYPES OF STROKE',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    },

    {
        img: 'https://i.ibb.co/xX9bGx3/2.jpg',
        name: 'DIFFERENT TYPES OF STROKE',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    },
    
    {
        img: 'https://i.ibb.co/w77PBNx/3.jpg',
        name: 'DIFFERENT TYPES OF STROKE',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    },

    {
        img: 'https://i.ibb.co/D99KYqC/4.jpg',
        name: 'DIFFERENT TYPES OF STROKE',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    },

    {
        img: 'https://i.ibb.co/pj9B7hs/5.jpg',
        name: 'DIFFERENT TYPES OF STROKE',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    },

    {
        img: 'https://i.ibb.co/Bs3G2y0/6.jpg',
        name: 'DIFFERENT TYPES OF STROKE',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    }

]
const News = () => {
    return (
        <div id="news" className="container">
            <h1 className="text-primary mb-5 mt-5">NEWS</h1>
            <div className="row">
                {
                    Newses.map(news => <Data key={news.name} news={news}></Data>)
                }
            </div>
        </div>
    );
};

export default News;