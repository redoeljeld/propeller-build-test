import { EyeColor, Gender, HairColor, PersonalData, SkinColor } from "../types/person.types";

/**
 * Filter the personal data
 * @param data personal data
 * @param hairColor hair color
 * @param eyeColor eye color
 * @param skinColor skin color
 * @param gender gender
 * @param searchTerm search term
 * @returns filtered data
 */
export const filterAndSearchData = (data: PersonalData[], hairColor: HairColor, eyeColor: EyeColor, skinColor: SkinColor, gender: Gender, searchTerm: string) => {
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