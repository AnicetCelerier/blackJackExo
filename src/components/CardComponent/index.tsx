import { Carte } from "../../types";

import "./index.css";

type CardComponentProps = {
  carte: Carte;
};

const CardComponent = (props: CardComponentProps) => {
  const { carte } = props;
  return (
    <div className="card">
      <img
        className="card-texte"
        src={process.env.PUBLIC_URL + `assets/${carte.texte}.png`}
        alt=""
      />
      <img
        src={`assets/${carte.enseigne}.png`}
        className="card-enseigne"
        alt=""
      />
      <span className="card-value">{carte.valeur}</span>
    </div>
  );
};

export default CardComponent;
