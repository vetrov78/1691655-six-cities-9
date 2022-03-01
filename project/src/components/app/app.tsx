import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from './main-screen/main-screen';
import LoginScreen from './login-screen/login-screeen';
import NotFoundScreen from './not-found-screen/not-found-screen';
import FavoritesScreen from './favorites-screen/favorites-screen';
import PropertyScreen from './property-screen/property-screen';
import PrivateRoute from './private-route/private-route';

type AppScreenProps = {
  rentObjectsNumber: number;
}

function App({rentObjectsNumber}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen rentObjecsNumber={rentObjectsNumber} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<PropertyScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
    // <MainScreen rentObjecsNumber={rentObjecsNumber} />
  );
}

export default App;
