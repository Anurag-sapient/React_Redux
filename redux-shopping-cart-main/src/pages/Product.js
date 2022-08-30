import React from 'react'
import {useLocation} from 'react-router-dom';
function Product() {
  const product =useLocation().state;
  console.log(product)
  return (
    <div>
       <center><h2 className="heading">Welcome to the Product Page</h2></center>
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>Price:{product.price}</h5>
                    <h5>Rating:{product.rating.rate}</h5>
                    <h5>Count:{product.rating.count}</h5>
                    <h5>Description:</h5>
                    <span>{product.description}</span>
                </div>
    </div>
  )
}

export default Product
