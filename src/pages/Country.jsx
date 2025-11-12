import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/layout/CountryCard";
import {SearchFilter} from "../components/UI/SearchFilter";
export const Country = () => {
  const [isPending, start] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    start(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  //console.log(search,filter);
 //this logic applies to all search in world
  const searchCountry = (country) => {
    if(search) {
    return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country;
  };

  const filterRegion = (country) => {
    if(filter === "all") return country;
    return country.region === filter;
  };

  //here is main logic
  const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

  return (
    <section className="country-section">
      <SearchFilter 
      search={search}
      setSearch={setSearch}
      filter={filter}
      setFilter={setFilter} 
      countries={countries}
      setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};
