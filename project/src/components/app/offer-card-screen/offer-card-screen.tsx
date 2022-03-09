import { Link } from 'react-router-dom';
import { Offer } from '../../../types/offer';

type OfferCardScreenProps = {
  offer: Offer
  setActiveOffer: (offer: Offer) => void
}

function OfferCardScreen(props: OfferCardScreenProps): JSX.Element {
  const {offer, setActiveOffer} = props;

  const getRatingInProcent = () => {
    const result = Math.round(offer.rating) * 20;

    return `${result}%`;
  };

  return (
    <article
      onMouseEnter={(evt) => {
        evt.preventDefault();
        setActiveOffer(offer);
      }}
      className="cities__place-card place-card"
    >
      {
        offer.isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> :
          <div />
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div
        className="place-card__info"
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className=
              {
                offer.isFavorite ?
                  'place-card__bookmark-button place-card__bookmark-button--active button' :
                  'place-card__bookmark-button button'
              }
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingInProcent()}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#">{offer.title}</Link>
        </h2>
        <p className="place-card__type">
          {offer.type}
        </p>
      </div>
    </article>
  );
}

export default OfferCardScreen;
