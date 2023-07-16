import './Card.css';
import content from '../data/cardContent.json';
import { CardContent } from './CardContent';

const {title, price, duration} = content;

// const myStyle = {
//     margin: '0 auto',

//     height: '257px',
//     width: '498px',
//     borderRadius: '30px',
//     boxShadow: 'rgba(0, 0, 0, 0.1) 2px 6px 30px 0px',
//     backgroundColor: 'bisque'
// }

export const Card = ({ isCardHovered }) => {
  return (
    <div className={`card-conteiner ${isCardHovered ? 'card-border' : ''}`}>
      <CardContent title={title} price={price} duration={duration} />
    </div>
  );
};
