import React, { useState, useEffect,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../reducer/cartSlice';
import {useNavigate} from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate();
    const handleOnClick =(produ) => {navigate('/product', {state:produ});}

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };
    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={()=>handleOnClick(product)} className="btn">
                        View Product
                    </button>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;
