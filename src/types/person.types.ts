export type HairColor = 'blond' | 'n/a' | 'none' | 'brown' | 'brown, grey' | 'white, red' | 'black' | 'auburn, white';
export type SkinColor = 'fair' | 'gold' | 'white, blue' | 'white' | 'light' | 'white, red' | 'none';
export type EyeColor = 'blue' | 'yellow' | 'red' | 'brown' | 'blue-gray' | 'none';
export type Gender = 'male' | 'female' | 'n/a' | 'none';

export interface PersonalData {
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