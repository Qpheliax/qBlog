import React from "react";
import { ReactComponent as Gear } from "../assets/gear.svg";

const GearPlaceholder = () => {
    return <div className="gear"><span>Loading...</span><figure className="gear-svg"><Gear /></figure></div>; 
}

export default GearPlaceholder;