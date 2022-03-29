import { useState } from 'react';
import { Offer, Offers } from '../../types/offer';
import OfferCardScreen from '../offer-card-screen/offer-card-screen';

type OffersListProps = {
  offers: Offers;
}

function OffersListScreen(props: OffersListProps):JSX.Element {
  const {offers} = props;
  const [activeOffer, setActiveOffer] = useState({} as Offer);

  return (
    <div className="cities__places-list places__list tabs__content">

      {
        'id' in activeOffer ?
          <span>{activeOffer.id}</span> :
          <span>0</span>
      }

      {
        offers.map((offer) => (
          <OfferCardScreen
            key={offer.id}
            offerType='ordinary'
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
