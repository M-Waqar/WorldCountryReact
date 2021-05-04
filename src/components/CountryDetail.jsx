import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetail() {
    let { Name } = useParams();
    const [country, setcountry] = useState("");

    useEffect(() => {
        getCountry();
    }, []);

    const getCountry = async (name) => {
        var response = await axios.get('https://restcountries.eu/rest/v2/alpha/' + Name);
        setcountry(response.data);
    }

    console.log(country);
    return (
        <div className="mx-auto">
            <div className="card col-6 offset-3">
                <img src={ country.flag } className="card-img-top" alt={ country.name } />
                <div className="card-body text-center">
                    <h1 className="card-title">{ country.name }</h1>
                    <h5 className="card-title">Region : { country.region }</h5>
                    <h5 className="card-title">Capital : { country.name }</h5>
                    <h5 className="card-title">Area : { country.area }</h5>
                </div>
                <div>
                    <ul className="list-group list-group-flush">
                        {
                            country && country.borders &&
                            country.borders.map((boder, index) => {
                                return (
                                    <li key={index} className="list-group-item">
                                        { boder }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CountryDetail;
