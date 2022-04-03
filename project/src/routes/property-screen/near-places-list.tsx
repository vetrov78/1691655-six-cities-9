import { OffersListProps } from '../../types/offer';
import OfferCardScreen from '../offer-card-screen/offer-card-screen';

function NearPlacesList(props: OffersListProps): JSX.Element {
  const {offers, setActiveOffer} = props;
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          offers.map((offer) => (
            <OfferCardScreen
              key={offer.id}
              offerType='nearPlace'
              offer={offer}
              setActiveOffer={setActiveOffer}
            />
          ))
        }

      </div>
    </section>
  );
}

export default NearPlacesList;
