import { Link } from "react-router-dom";

type CardProps = {
  number: string;
  color: string;
  game: string;
  card: string;
  id?: string;
  onClick?: () => void; // Optional onClick handler
};

function Card(props: CardProps) {
  const { number, color, game, card, id, onClick } = props;

  return (
    <div className="col">
      <Link to={game}>
        <div className={id} onClick={onClick}>
          <button className={card}>
            <p className="type">
              {number}
              {color}
            </p>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Card;
