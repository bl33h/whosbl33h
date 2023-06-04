/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: ToggleButton.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../Constants/constants";

const ToggleButton = ({isActive, handleClick}) => {
  return (
    <div id="togglebutton" onClick={handleClick} className="bg-grayscale-900 rounded-xl w-[50px] h-[50px] absolute top-4 right-4 flex items-center justify-center cursor-pointer">
      <FontAwesomeIcon className="text-4xl text-grayscale-50" icon={isActive ? icons.faX : icons.faBars} />
    </div>
  );
};

export default ToggleButton;
