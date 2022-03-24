import { useState } from 'react';
import { Offers } from '../../types/offer';
import OfferCardScreen from '../offer-card-screen/offer-card-screen';

type OffersListProps = {
  offers: Offers;
}

function OffersListScreen(props: OffersListProps):JSX.Element {
  const {offers} = props;
  const [activeOffer, setActiveOffer] = useState(offers[0]);

  return (
    <div className="cities__places-list places__list tabs__content">
      <div>{activeOffer.id}</div>
      {
        offers.map((offer) => (
          <OfferCardScreen
            key={offer.id}
            offer={offer}
            setActiveOffer={
              (currentOffer) => {
                setActiveOffer(currentOffer);
              }
            }
          />
        ))
      }
    </div>
  );
}

export default OffersListScreen;
