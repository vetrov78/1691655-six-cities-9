import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { Offer } from '../../types/offer';
import { getRatingInProcent } from '../../utils';

type OfferCardScreenProps = {
offerType: string
  offer: Offer
  setActiveOffer: (offer: Offer) => void
}

function OfferCardScreen(props: OfferCardScreenProps): JSX.Element {
  const navigate = useNavigate();
  const {offerType, offer, setActiveOffer} = props;
  const ClassNames: { [key: string]: string} = {
    'favorite': 'favorites__card',
    'ordinary': 'cities__place-card',
  };

  return (
    <article
      onMouseEnter={() => setActiveOffer(offer)}
      onMouseLeave={() => setActiveOffer({} as Offer)}
      className={`${ClassNames[offerType]} place-card`}
    >
      {
        offer.isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
      }
      {
        (offerType === 'ordinary') ?
          <div className="cities__image-wrapper place-card__image-wrapper">
            <Link to="#">
              <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
            </Link>
          </div> :
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to="#">
              <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place" />
            </Link>
          </div>
      }
      <div
        className={`${offerType} place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className=
              {
                `place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`
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
            <span style={{width: getRatingInProcent(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            onClick={() => navigate(AppRoute.Offer)}
            to={`/offer/${offer.id}`}
          >
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">
          {offer.type}
        </p>
      </div>
    </article>
  );
}

export default OfferCardScreen;
