"use client";
import { useState } from "react";
const ToggleAvaliable = () => {
  const [avaliable, setAvaliable] = useState(false);

  const toggler = () => {
    setAvaliable((inital) => !inital);
  };
  return (
    <div className="toggle-container flex gap-4 justify-center items-center w-52 bottom-[57px] left-36 ">
      <h6 className="text-heading_6 text-custum-gray_100">Avalliable</h6>
      <input
        type="checkbox"
        id="toggle"
        className="toggle-checkbox "
        onClick={toggler}
      />
      <label htmlFor="toggle" className="toggle-label">
        <span className="toggle-switch"></span>
        <span className="toggle-inner"></span>
      </label>
    </div>
  );
};
export default ToggleAvaliable;
