import React from 'react';
import mechanic1 from '../../../images/mechanic1.jpg'
import mechanic2 from '../../../images/mechanic2.jpg'
import mechanic3 from '../../../images/mechanic3.jpg'
import mechanic4 from '../../../images/mechanic4.jpg'
import mechanic5 from '../../../images/mechanic5.jpg'
import mechanic6 from '../../../images/mechanic6.jpg'
import Expert from '../Expert/Expert';



const experts=[
    {
        img:mechanic1,
        name:'Androw Baluya',
        expertize:'Engine Mechanic Expert'
    },
    {
        img:mechanic2,
        name:'Owali Salkura',
        expertize:'Engine Repairs Expert'
    },
    {
        img:mechanic3,
        name:'Aldon Smith',
        expertize:'Engine Mechanicv Expert'
    },
    {
        img:mechanic4,
        name:'Santara kuliya',
        expertize:'Automobile Expert'
    },
    {
        img:mechanic5,
        name:'Badsha Fukari',
        expertize:'Polish Expert'
    },
    {
        img:mechanic6,
        name:'Rande Buruya',
        expertize:'Coloring Experts'
    },
]

const Experts = () => {
    return (
        <div className="container ">
            <h1 className="mt-5 mb-5 fs-1 fw-2 text-white bg-primary py-3 mb-3 rounded-pill">Our Experts</h1>
            <div className="row">
                {
                    experts.map(expert=><Expert expert={expert}></Expert>
                        )
                }

            </div>
        </div>
    );
};

export default Experts;