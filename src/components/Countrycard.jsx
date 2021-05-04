import React from 'react';
import { useHistory } from 'react-router-dom';

function Countrycard({country}) {
    let history = useHistory();
    
    const openDetail = (shortName) => {
        history.push("/detail/" + shortName);
    }

    return (
        <div className="col-4 p-3">
            <div className="card">
                <img src={country.flag} className="card-img-top" 
                    style={{maxHeight:250 +'px', height:200 + 'px'}} alt={country.name} />
                <div className="card-body">
                    <h5 className="card-title">{country.name}</h5>
                    <p className="card-text">
                        <strong>Region:</strong> {country.region} <br/>
                        <strong>Sub Region:</strong> {country.subregion} <br/>
                        <strong>Population:</strong> {country.population} <br/>
                    </p>
                    <button onClick={() => { openDetail(country.alpha3Code)} } className="btn btn-block btn-primary">Details</button>
                </div>
            </div>
        </div>
    )
}

export default Countrycard;
