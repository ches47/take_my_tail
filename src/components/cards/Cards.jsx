import cards from '../../constants/index';
import Card from '../card/Card';
import './cards.scss';

const Cards = () => {
  return (
    <div className="cards">
      <h1 className="cards__title">Advertisement:</h1>
      <div className="cards__wrapper">
        {cards.map((card) => {
          return <Card {...card} key={card.id} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
