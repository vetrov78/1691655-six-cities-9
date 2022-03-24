import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../consts';
import MainScreen from '../routes/main-screen/main-screen';
import LoginScreen from '../routes/login-screen/login-screeen';
import NotFoundScreen from '../routes/not-found-screen/not-found-screen';
import FavoritesScreen from '../routes/favorites-screen/favorites-screen';
import PropertyScreen from '../routes/property-screen/property-screen';
import PrivateRoute from '../routes/private-route/private-route';
import { Offer } from '../types/offer';

export type AppScreenProps = {
  rentObjectsNumber: number;
  offers: Offer[];
}

function App({rentObjectsNumber, offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainScreen
              rentObjecsNumber={rentObjectsNumber}
              offers={offers}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesScreen
                offers={offers}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={
            <PropertyScreen
              offers={offers}
            />
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
