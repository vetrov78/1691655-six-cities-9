import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { getRatingInProcent } from '../../utils';

type OfferCardScreenProps = {
  offerType: string
  offer: Offer
  setActiveOffer: (offer: Offer | undefined) => void
}

function OfferCardScreen(props: OfferCardScreenProps): JSX.Element {
  const {offerType, offer, setActiveOffer} = props;
  const ClassNames = [
    {
      page: 'favorite',
      className: {
        article: 'favorites__card',
        imageWrapper: 'favorites',
        divCardInfo: 'favorites__card-info',
      },
    },
    {
      page: 'ordinary',
      className: {
        article: 'cities__place-card',
        imageWrapper: 'cities',
      },
    },
    {
      page: 'nearPlace',
      className: {
        article: 'near-places__card',
        imageWrapper: 'near-places',
      },
    },
  ];

  return (
    <article
      onMouseEnter={() => setActiveOffer(offer)}
      onMouseLeave={() => setActiveOffer(undefined)}
      className={`${ClassNames.find((o) => o.page===offerType)?.className.article} place-card`}
    >
      {
        offer.isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
      }
      {
        <div className={`${ClassNames.find((o) => o.page===offerType)?.className.imageWrapper}__image-wrapper place-card__image-wrapper`}>
          <Link to="#">
            <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
          </Link>
        </div>
      }
      <div
        className={`${ClassNames.find((o) => o.page===offerType)?.className.divCardInfo} place-card__info`}
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
