import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardSetList = () => {
  const [sets, setSets] = useState([]);
  const [filteredSets, setFilteredSets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch card sets from the API
    axios.get('https://pokemontcg.guru/api/sets')
      .then((response) => {
        setSets(response.data.sets);
        setFilteredSets(response.data.sets);
      })
      .catch((error) => {
        console.error('Error fetching card sets:', error);
      });
  }, []);

  useEffect(() => {
    // Apply filtering based on search term
    const filtered = sets.filter((set) =>
      set.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSets(filtered);
  }, [searchTerm, sets]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Card Sets</h1>
      <input
        type="text"
        placeholder="Search sets..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredSets.map((set) => (
          <li key={set.id}>{set.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardSetList;