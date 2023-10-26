// import { beagle, frenchbulldog, jackrussel, labrador } from '../assets/dogs';
import beagleImage from '../assets/dogs/beagle.jpg';
import frenchbulldogImage from '../assets/dogs/frenchbulldog.jpg';
import jackrusselImage from '../assets/dogs/jackrussel.jpg';
import labradorImage from '../assets/dogs/labrador.jpg';

const images = {
  beagle: beagleImage,
  frenchbulldog: frenchbulldogImage,
  jackrussel: jackrusselImage,
  labrador: labradorImage,
};

const cards = [
  {
    id: 1,
    img: images.frenchbulldog,
    breed: 'French bulldog',
    color: 'Blue',
    age: '1 month',
    price: '500$',
    gender: 'male',
    // classificationBreed: 'city',
  },
  {
    id: 2,
    img: images.labrador,
    breed: 'Labrador',
    color: 'Chocolate',
    age: '2 month',
    price: '900$',
    gender: 'male',
  },
  {
    id: 3,
    img: images.jackrussel,
    breed: 'Jackrussel',
    color: 'Bicolor',
    age: '7 month',
    price: '200$',
    gender: 'male',
  },
  {
    id: 4,
    img: images.beagle,
    breed: 'Beegle',
    color: 'Tricolor',
    age: '0,5 month',
    price: '600$',
    gender: 'male',
  },
];

export default cards;

// Чес, [26 окт. 2023 г., 13:55:42]:
// Все породы
// бойцовские
//  гипоаллергенные
//  декоративные для детей
// для защиты
// Мелкие породы собак для квартиры
// Средние породы собак для дома
// Крупные породы собак для квартиры
//  для охраны
// ездовые
// охотничьи
// сторожевые

// Подружейные собаки

// декоративные комнатные( для детей )
