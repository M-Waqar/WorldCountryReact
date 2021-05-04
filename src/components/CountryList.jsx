import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Countrycard from './Countrycard';
import { v4 as uuidv4 } from 'uuid';

function CountryList() {
    const [countrylist, setCountrylist] = useState([]);
    const [visibleCountries, setvisibleCountries] = useState([]);
    const [csort, setcsort] = useState(true);
    const countryPerPage = 9;

    useEffect(() => {
        async function getCountries() {
          try {
            const response = await axios.get('https://restcountries.eu/rest/v2/all');
            const list = response.data.sort((a, b) => a.name > b.name ? 1 : -1);
            setCountrylist(list);
            setvisibleCountries(list.splice(0,countryPerPage)); 
          } catch (error) {
            console.error(error);
          }
        }
        getCountries();
        console.log("effect called: ");
    },[]);
    
      const loadAllCountries = () => {
        setvisibleCountries([...visibleCountries, ...countrylist]);
      }
    
      const sortCountries = () => {
        let listcountry = visibleCountries;
        if(csort) {
          listcountry = listcountry.sort((a, b) => a.name > b.name ? 1 : -1);
        } else {
          listcountry = listcountry.sort((a, b) => a.name < b.name ? 1 : -1);
        }
        setcsort(prev => !prev);
        setvisibleCountries([...listcountry]);
      }
    
      const sortPopulation = (e) => {
        let sortby = e.target.outerText.indexOf("Desc");
        let listcountry = visibleCountries;
        if(sortby > 0) {
          listcountry = listcountry.sort((a, b) => a.population < b.population ? 1 : -1);
        } else {
          listcountry = listcountry.sort((a, b) => a.population > b.population ? 1 : -1);
        }
        setvisibleCountries([...listcountry]);
      }

    return (
        <div className="container mt-5">
      <h1 className="text-primary text-center">Countries List</h1>
      <div className="text-center">
        <div className="col-12">
            <button onClick={sortCountries} className="btn btn-primary m-2"> 
            {
              !csort ? "Sort Country By Name A-Z" : "Sort Country By Name Z-A"
            }
            </button>
            <button onClick={sortPopulation} className="btn btn-primary m-2">Sort Country By Population Asc</button>
            <button onClick={sortPopulation} className="btn btn-primary m-2">Sort Country By Population Desc</button>
        </div>
      </div>
      <div className="row">
        {
          visibleCountries.map((country, index) => {
            return (
              <Countrycard key={uuidv4()} country={country} />
            )
          })
        }
      </div>
      {
        visibleCountries.length !== countrylist.length && 
        <div className="mt-5 mb-5">
          <button onClick={loadAllCountries} className="btn btn-primary btn-block">Load All Countries</button>
        </div>
      }
      <div>
      </div>
    </div>
    )
}

export default CountryList;
