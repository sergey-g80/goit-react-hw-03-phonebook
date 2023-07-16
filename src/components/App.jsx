import { Card } from './Card/Card';
import { CardNew } from './CardsNew/CardsNew';

export const App = () => {
  return (
    <div className="container">
      <Card isCardHovered={true } />
      <CardNew  />
    </div>
  );
};
