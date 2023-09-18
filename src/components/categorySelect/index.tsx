import { FC } from "react";
import './index.scss';

type TProps = {
  value: string;
  onChange: (e: any) => void;
  object: {value: string, label: string}[];
}
export const CategorySelect: FC<TProps> = (props: TProps) => {
  const {value, onChange, object} = props;

  return <select
    value={value}
    onChange={onChange}
  >
    {object.map((item: {value: string, label: string}) => (
      <option value={item.value}>{item.label}</option>
    ))};
  </select>;
}