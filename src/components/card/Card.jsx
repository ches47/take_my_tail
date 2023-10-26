import Link from 'next/link';
import '../card/card.scss';
import Image from 'next/image';

const Card = (props) => {
  const { img, breed, color, age, price, gender, classificationBreed } = props;
  return (
    <div className="card">
      <div className="card__box">
        <div className="cardImage">
          <Image
            src={img}
            className="cardImg"
            alt="dog"
            width={200}
            height={200}
            style={{ borderRadius: '20px', objectFit: 'cover' }}
          />
        </div>
        <div className="card__info">
          <Link href={'/cardProduct'} className="card__title">
            <h1>{breed}</h1>
          </Link>
          <div className="card__color">
            <span>Color:</span> <span>{color}</span>
          </div>
          <div className="card__age">
            <span>Age:</span> <span>{age}</span>
          </div>
          <div className="card__gender">
            <span>Gender:</span> <span>{gender}</span>
          </div>
          <h6 className="card__classification">{classificationBreed}</h6>
        </div>
      </div>

      <div className="card__price-wrapper">
        <div className="card__price-box">
          <span>Price:</span> <h3>{price}</h3>
        </div>
        <Link href={'/aboutBreed'} className="card__price-about">
          All about breed
        </Link>
        <Link href={'/cardProduct'} className="card__price-product">
          BUY NOW
        </Link>
      </div>
    </div>
  );
};

export default Card;
