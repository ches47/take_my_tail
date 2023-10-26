import cards from '../../constants/index';
import Card from '../card/Card';
import './cards.scss';

const Cards = () => {
  return (
    <div className="cards">
      <h1 className="cardsTitle">Advertisement:</h1>
      {cards.map((card) => {
        return <Card {...card} key={card.id} />;
      })}
    </div>
  );
};

export default Cards;
