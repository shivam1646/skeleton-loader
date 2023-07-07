import { PropTypes } from "prop-types";

import Skeleton from "../../components/Skeleton";
import "../styles.css";

function Card({ card, isLoading }) {
  return (
    <div className="card">
      <Skeleton loading={isLoading} type="square" animation="wave">
        <img className="card__thumbnail" src={card.thumbnail} />
      </Skeleton>
      <div className="card__description">
        <Skeleton type="circle" loading={isLoading} animation="wave">
          <img className="card__avatar" src={card.user} />
        </Skeleton>
        <div style={{ marginLeft: "1rem" }}>
          <Skeleton loading={isLoading} animation="wave">
            <h3 style={{ margin: "0px" }}>{card.title}</h3>
          </Skeleton>
          <Skeleton loading={isLoading} animation="wave">
            <p style={{ margin: "0px" }}>{card.description}</p>
          </Skeleton>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default Card;
