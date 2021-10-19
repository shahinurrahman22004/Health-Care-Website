import React from 'react';
import Data from '../Data/Data';


const Newses = [
    
    {
        img: 'http://html.kodesolution.live/html/health-beauty/medical/medinova-html/v3.2/demo/images/blog/1.jpg',
        name: 'DIFFERENT TYPES OF STROKE',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    },

    {
        img: 'http://html.kodesolution.live/html/health-beauty/medical/medinova-html/v3.2/demo/images/blog/2.jpg',
        name: 'DIFFERENT TYPES OF STROKE',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    },
    
    {
        img: 'http://html.kodesolution.live/html/health-beauty/medical/medinova-html/v3.2/demo/images/blog/3.jpg',
        name: 'DIFFERENT TYPES OF STROKE',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    },

    {
        img: 'http://html.kodesolution.live/html/health-beauty/medical/medinova-html/v3.2/demo/images/blog/4.jpg',
        name: 'DIFFERENT TYPES OF STROKE',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    },

    {
        img: 'http://html.kodesolution.live/html/health-beauty/medical/medinova-html/v3.2/demo/images/blog/5.jpg',
        name: 'DIFFERENT TYPES OF STROKE',
        para: 'Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.'
    },

    {
        img: 'http://html.kodesolution.live/html/health-beauty/medical/medinova-html/v3.2/demo/images/blog/6.jpg',
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