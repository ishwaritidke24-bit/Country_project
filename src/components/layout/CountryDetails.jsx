import { useParams } from "react-router-dom";
import { useState,useTransition,useEffect } from "react";
import { getCountryIndvData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams();
  
   const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState();
  
    useEffect(() => {
      startTransition(async () => {
        const res = await getCountryIndvData(params.id);
        if(res.status===200) setCountry(res.data[0]);
      });
    }, []);
  
    if (isPending) return <Loader />;
    console.log(params);
    return(
      <section className="card country-details-card container">
        <div className="container-card bg-white-box"> 
          {country && (
          <div className="country-image grid grid-two-cols">
            <img src={country.flags.svg} 
            alt={country.flags.alt} className="flags" />
            <div className="country-content">
              <p className="card-title">{country.name.official}</p>
              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Names: </span>
                  {Object.keys(country.name.nativeName)
                  .map((key) => country.name.nativeName[key].common)
                  .join(", " )}
                </p>
                <p>
                  <span className="card-description">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description">Capital:</span>
                  {country.capital?.[0]}
                </p>
                <p>
                  <span className="card-description">Top Level Domain: </span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="card-description">Currencies: </span>
                  {Object.keys(country.currencies)
                  .map((currElement) => country.currencies[currElement].name)
                  .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(country.languages)
                  .map((key) => country.languages[key])
                  .join(", ")}
                </p>
              </div>
            </div>
          </div>
          )}
        </div>
      </section>
    );
};