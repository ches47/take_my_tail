import '../card/card.scss';
import Image from 'next/image';

const Card = (props) => {
  const { img, breed, color, age, price, gender, classificationBreed } = props;
  return (
    <div className="card">
      <Image src={img} className="cardImg" alt="dog" />
      <h1>{breed}</h1>
      <h2>{color}</h2>
      <h3>{age}</h3>
      <h4>{price}</h4>
      <h5>{gender}</h5>
      <h6>{classificationBreed}</h6>
    </div>
  );
};

export default Card;
