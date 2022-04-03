import { OffersListProps } from '../../types/offer';
import OfferCardScreen from '../offer-card-screen/offer-card-screen';

function OffersListScreen(props: OffersListProps):JSX.Element {
  const {offers, setActiveOffer} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCardScreen
            key={offer.id}
            offerType='ordinary'
            offer={offer}
            setActiveOffer={setActiveOffer}
          />
        ))
      }
    </div>
  );
}

export default OffersListScreen;
