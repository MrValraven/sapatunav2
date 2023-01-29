import React from "react";

import "./styles.scss";

const Gamemode = ({ image, description }) => {
  return (
    <div className="gamemode">
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default Gamemode;
