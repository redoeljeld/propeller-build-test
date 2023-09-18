import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';

type HairColor = 'blond' | 'n/a' | 'none' | 'brown' | 'brown, grey' | 'white, red' | 'black' | 'auburn, white';
type SkinColor = 'fair' | 'gold' | 'white, blue' | 'white' | 'light' | 'white, red' | 'none';
type EyeColor = 'blue' | 'yellow' | 'red' | 'brown' | 'blue-gray' | 'none';
type Gender = 'male' | 'female' | 'n/a' | 'none';

interface PersonalData {
  name: string;
  height: string;
  mass: string;
  hair_color: HairColor;
  skin_color: SkinColor;
  eye_color: EyeColor;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

const fetchData = async () => {
  const response = await axios.get('https://swapi.dev/api/people');
  return response.data;
};

const filterAndSearchData = (data: PersonalData[], hairColor: HairColor, eyeColor: EyeColor, skinColor: SkinColor, gender: Gender, searchTerm: string) => {
  let result: PersonalData[] = data;
  if (hairColor !== "none") {
    result = result.filter((person) => person.hair_color === hairColor);
  }

  if (eyeColor !== "none") {
    result = result.filter((person) => person.eye_color === eyeColor);
  }

  if (skinColor !== "none") {
    result = result.filter((person) => person.skin_color === skinColor);
  }

  if (gender !== 'none') {
    result = result.filter((person) => person.gender === gender);
  }

  if (searchTerm !== '') {

    result = result.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return result;
};

const App = () => {
  const [data, setData] = useState<PersonalData[]>([]);
  const [filteredData, setFilteredData] = useState<PersonalData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hairColor, setHairColor] = useState<HairColor>('none');
  const [skinColor, setSkinColor] = useState<SkinColor>('none');
  const [eyeColor, setEyeColor] = useState<EyeColor>('none');
  const [gender, setGender] = useState<Gender>('none');

  useEffect(() => {
    fetchData().then((res) => {
      setData(res.results);
      setFilteredData(res.results);
    });
  }, []);

  useEffect(() => {
    setFilteredData(filterAndSearchData(data, hairColor, eyeColor, skinColor, gender, searchTerm));
  }, [data, hairColor, eyeColor, skinColor, gender, searchTerm]);

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={hairColor}
          onChange={(e) => setHairColor(e.target.value as HairColor)}
          className="hair-color-select"
        >
          <option value="none">Select a hair color</option>
          <option value="blond">Blond</option>
          <option value="brown">Brown</option>
          <option value="brown, grey">Brown/Grey</option>
          <option value="white, red">White/Red</option>
          <option value="black">Black</option>
          <option value="auburn, white">Auburn/White</option>
        </select>
        <select
          value={skinColor}
          onChange={(e) => setSkinColor(e.target.value as SkinColor)}
          className="skin-color-select"
        >
          <option value="none">Select a skin color</option>
          <option value="fair">Fair</option>
          <option value="gold">Gold</option>
          <option value="white, blue">White/Blue</option>
          <option value="white">White</option>
          <option value="light">Light</option>
          <option value="white, red">White/Red</option>
        </select>
        <select
          value={eyeColor}
          onChange={(e) => setEyeColor(e.target.value as EyeColor)}
          className="eye-color-select"
        >
          <option value="none">Select a eye color</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="red">Red</option>
          <option value="brown">Brown</option>
          <option value="blue-gray">Blue-Gray</option>
        </select>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value as Gender)}
          className="gender-select"
        >
          <option value="none">Select a gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="list">
        {filteredData.map((person) => (
          <div key={person.name} className="item">
            <div className="name">{person.name}</div>
            <div className="gender">{person.gender}</div>
            <div className="height">Height: {person.height}cm</div>
            <div className="mass">Weight: {person.mass}kg</div>
            <div className="hair_color">Hair Color: {person.hair_color}</div>
            <div className="skin_color">Skin Color: {person.skin_color}</div>
            <div className="eye_color">Eye Color: {person.eye_color}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
