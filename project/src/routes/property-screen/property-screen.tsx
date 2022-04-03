import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Map from '../../components/map/map';
import { CITY } from '../../mocks/city';
import { NEAR_OFFERS } from '../../mocks/nearOffers';
import { REVIEWS } from '../../mocks/reviews';
import { Offer } from '../../types/offer';
import { getRatingInProcent } from '../../utils';
import NearPlacesList from './near-places-list';
import ReviewScreen from './review-screen';
import ReviewsList from './reviews-list';

function PropertyScreen (props: { offers: Offer[] }): JSX.Element {
  const {id} = useParams();
  const {offers} = props;
  const currentOffer = offers.find((offer) => offer.id === Number(id));
  const [activeNearOffer, setActiveNearOffer] = useState<Offer | undefined>(undefined);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#">
                    <span className="header__signout">Sign Out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                currentOffer?.images.slice(0, 6).map((image) => (
                  <div
                    key={`image-${image}`}
                    className="property__image-wrapper"
                  >
                    <img className="property__image" src={image} alt="Studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                currentOffer?.isPremium &&
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer?.title}
                </h1>
                <button
                  className={
                    currentOffer?.isFavorite ?
                      'property__bookmark-button property__bookmark-button--active button' :
                      'property__bookmark-button button'
                  }
                  type="button"
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getRatingInProcent(currentOffer?.rating || 100)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer?.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${currentOffer?.bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${currentOffer?.maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    currentOffer?.goods.map((good) => (
                      <li
                        key={good.toString()}
                        className="property__inside-item"
                      >
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={currentOffer?.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {
                      currentOffer?.host.name
                    }
                  </span>
                  {
                    currentOffer?.host.isPro && <span className="property__user-status">Pro</span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer?.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{REVIEWS.length}</span></h2>
                <ReviewsList
                  reviews={REVIEWS}
                />
                <ReviewScreen />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={CITY}
              points= {NEAR_OFFERS}
              selectedPoint={activeNearOffer}
            />
          </section>
        </section>
        <div className="container">
          <NearPlacesList
            offers={NEAR_OFFERS}
            setActiveOffer={(currentNearOffer) => {
              setActiveNearOffer(currentNearOffer);
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default PropertyScreen;
