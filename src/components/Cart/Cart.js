import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    const totalPopulation = cart.reduce( (sum, country) => sum + country.population, 0)
    const totalArea= cart.reduce( (sum, country) => sum + country.area, 0)
    return (
        <div style={{border:'2px solid gray',width:"30%", margin:'auto'}}>
            <h2>This is Cart: {cart.length}</h2>
            <p>total population: {totalPopulation}</p>
            <p>total area: {totalArea} sq</p>
        </div>
    );
};

export default Cart;