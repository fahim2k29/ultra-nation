import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Cart from '../Cart/Cart';

const Home = () => {
    const [countries, setCountries]  = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data=>{
        setCountries(data);
        })
        .catch(error => console.log(error))
    },[])

    const handleCountryAdd = (country) => {
        const newCart = [...cart, country];
        setCart(newCart);
    }


    return (
        <div className="App">
        <h1>Country Loaded: {countries.length}</h1>
        <h4>Country Added: {cart.length}</h4>
        <Cart cart= {cart}></Cart>
        <ul>
            {
              countries.map(country =><Country handleCountryAdd={handleCountryAdd} country={country}>{country.name}</Country>)
            }
        </ul>
        
      </div>
    );
};

export default Home;