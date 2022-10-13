import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h2>Home</h2>
            <p>I got phone{phones.length}</p>
            {
                phones.map(phone => <li><Link to={`/phone/${phone.id}`}>{phone.name}</Link></li>)
            }
        </div>
    );
};

export default Home;