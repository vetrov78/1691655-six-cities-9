import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { Offer, Offers } from '../../../types/offer';
import FavoriteOfferCardScreen from '../favorite-offer-screen/favorite-offer-screen';

type FavoriteScreenProps = {
  offers: Offers,
}

function FavoritesScreen (props: FavoriteScreenProps): JSX.Element {
  const {offers} = props;
  const favoriteCitiesList: {[name:string]: Offer[]} = Object.create(null);

  offers.forEach(
    (offer) => {
      if ( !favoriteCitiesList[offer.city.name] ) {
        favoriteCitiesList[offer.city.name] = [];
      }
      favoriteCitiesList[offer.city.name].push(offer);
    },
  );

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
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
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object.entries(favoriteCitiesList).map(([key, value]) => (
                  <li key={key} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to="#">
                          <span>{key}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {
                        value.map((offer) => (
                          <FavoriteOfferCardScreen
                            key={offer.id}
                            offer={offer}
                          />
                        ))
                      }
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
