import React, { useState, useEffect } from 'react';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  //        

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/siyamulislam/countries/main/v3.1/countries.json')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, []);

  // const handleAddCountry = (country) => {
  //   const newCart = [...cart, country];
  //   setCart(newCart);
  //  } 

  return (
    <div className="App">
      <h1>country loaded: {countries.length}</h1>

      {/* <h4>Country added: {cart.length}</h4> */}
      {/* <Cart cart={cart}></Cart> */}
      { 
        countries.map(country => {
         // console.log(country.cca3);
         return <Country key={country.cca3} country={country}></Country>
        })
      }

    </div>
  );
}

export default App;
