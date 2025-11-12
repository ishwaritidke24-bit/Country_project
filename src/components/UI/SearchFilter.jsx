export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries
}) => {
  const handleInputSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sorted = [...countries].sort((a, b) =>
      value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    );
    setCountries(sorted);
  };

  return (
    <section className="section-search">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputSearch}
      />

      <button onClick={() => sortCountries("asc")}>Asc</button>
      <button onClick={() => sortCountries("desc")}>Desc</button>

      <select
        className="section-select"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value="all">All</option>
        <option value="Asia">Asia</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};
