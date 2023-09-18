import { useState, useEffect } from 'react';
import './styles.scss';
import { EyeColor, Gender, HairColor, PersonalData, SkinColor } from './types/person.types';
import { Person } from './components/person';
import { CategorySelect } from './components/categorySelect';
import { HAIR } from './const/hair';
import { SKIN } from './const/skin';
import { EYE } from './const/eye';
import { GENDER } from './const/gender';
import { fetchData } from './services/fetchData';
import { filterAndSearchData } from './utils/filterAndSeatchData';

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
        <CategorySelect 
          value={hairColor} 
          onChange={(e) => setHairColor(e.target.value as HairColor)}
          object={HAIR}/>
        <CategorySelect 
          value={skinColor} 
          onChange={(e) => setSkinColor(e.target.value as SkinColor)}
          object={SKIN}/>
        <CategorySelect 
          value={eyeColor} 
          onChange={(e) => setEyeColor(e.target.value as EyeColor)}
          object={EYE}/>
        <CategorySelect 
          value={gender} 
          onChange={(e) => setGender(e.target.value as Gender)}
          object={GENDER}/>
      </div>
      
      <div className="list">
      {filteredData.map((person) => (
        <Person person={person} />
      ))}
    </div>
    </div>
  );
};

export default App;
