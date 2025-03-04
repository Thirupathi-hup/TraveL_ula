import React, { useState } from 'react';
import "./App.css";
const App = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const name = prompt('Enter country name:');
    if (name) {
      setCountries([...countries, { name, states: [] }]);
    }
  };

  const editCountry = (index) => {
    const newName = prompt('Enter new country name:', countries[index].name);
    if (newName && window.confirm('Are you sure you want to update this country?')) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm('Are you sure you want to delete this country? This will delete all associated states and cities.')) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  return (
    <div>
      <h1>Country, State, and City Management</h1>
      <button onClick={addCountry}>Add Country</button>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            {country.name}
            <button onClick={() => editCountry(index)}>Edit</button>
            <button onClick={() => deleteCountry(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
