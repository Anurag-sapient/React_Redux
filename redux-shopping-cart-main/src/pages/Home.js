import React from 'react';
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            <center><h2 className="heading">Welcome to the Redux toolkit store</h2></center>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
    );
};

export default Home;
