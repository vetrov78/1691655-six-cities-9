import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from './main-screen/main-screen';
import LoginScreen from './login-screen/login-screeen';
import NotFoundScreen from './not-found-screen/not-found-screen';

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
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
    // <MainScreen rentObjecsNumber={rentObjecsNumber} />
  );
}

export default App;
