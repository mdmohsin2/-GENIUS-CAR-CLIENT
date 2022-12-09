import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, img, price, title } = service
    return (
        <div className=" p-4 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end flex items-center text-orange-600">
                    <p className='text-2xl font-semibold'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="">
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;