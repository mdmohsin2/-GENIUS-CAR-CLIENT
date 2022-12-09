import { error } from 'daisyui/src/colors';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext)

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;


        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        if (phone.length < 11) {
            alert('Phone number should be 11 characters')
        }


        fetch('https://genius-car-server-henna-six.vercel.app/orders', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Please order Confirm')
                    form.reset();
                }
            })
            .catch(error => console.error(error))

    }

    return (
        <div className='bg-gray-200'>
            <form onSubmit={handlePlaceOrder} className='p-24'>
                <h2 className="text-4xl text-center text-orange-600">you are about to order : {title}</h2>
                <h4 className="text-2xl text-center text-orange-600 mt-4 mb-12">Price : {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First name" className="input input-bordered w-full" required />
                    <input name='lastName' type="text" placeholder="Last name" className="input input-bordered w-full" required />
                    <input name='phone' type="text" placeholder="Your phone" className="input input-bordered w-full" required />
                    <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered mt-8 h-32 w-full" placeholder="Your about" required></textarea>
                <input className='btn w-full mt-4 bg-orange-500 border-0' type="submit" value="Order Confirm" />
            </form>
        </div>
    );
};

export default Checkout;