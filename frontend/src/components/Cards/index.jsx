import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SCard from "./Style";

function Card({
  data: { name, id, images, powerstats, appearance, biography },
}) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    setSrc(images.sm);
  }, []);

  return (
    <SCard src={src}>
      <div className="card">
        <h1>{name}</h1>
        <h2>{id}</h2>
        <section className="capacity">
          <ul className="namePower">
            <li className="strengh">strengh</li>
            <li className="power">power</li>
            <li className="speed">speed</li>
          </ul>
          <ul className="numbers">
            <li className="pointStrengh">{powerstats.intelligence}</li>
            <li className="pointPower">{powerstats.power}</li>
            <li className="pointSpeed">{powerstats.speed}</li>
          </ul>
        </section>
        <div className="identity">
          <p> Full Name: {biography.fullName} </p>
          <p>Race: {appearance.race}</p>
        </div>
      </div>
    </SCard>
  );
}
Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    images: PropTypes.shape().isRequired,
    powerstats: PropTypes.shape().isRequired,
    appearance: PropTypes.shape().isRequired,
    biography: PropTypes.shape().isRequired,
  }).isRequired,
};

export default Card;
