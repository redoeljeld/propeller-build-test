import { FC } from "react";
import { PersonalData } from "../../types/person.types";
import './index.scss';

type TProps = {
  person: PersonalData;
}

export const Person: FC<TProps> = (props: TProps) => {
  const { person } = props;

  return <div key={person.name} className="item">
    <div className="name">{person.name}</div>
    <div className="gender">{person.gender}</div>
    <div className="height">Height: {person.height}cm</div>
    <div className="mass">Weight: {person.mass}kg</div>
    <div className="hair_color">Hair Color: {person.hair_color}</div>
    <div className="skin_color">Skin Color: {person.skin_color}</div>
    <div className="eye_color">Eye Color: {person.eye_color}</div>
  </div>;
}