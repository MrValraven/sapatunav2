import React from "react";
import "./styles.scss";

import Image from "../../assets/party.svg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="home">
      <h1>Sapatuna</h1>
      <h2>
        A LGBTQIA+ friendly
        <br /> party game
      </h2>
      <img src={Image} alt="" />
      <Button
        onClick={() => navigate("/players")}
        buttonText="Start
      playing!"
      />
    </section>
  );
};

export default Home;
