import { inputFieldType } from "../type";

const InputField = ({ placeholder, type, className }: inputFieldType) => {
  return <input type={type} placeholder={placeholder} className={className} />;
};
export default InputField;
