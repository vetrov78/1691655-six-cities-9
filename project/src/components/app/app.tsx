import MainScreen from './main-screen/main-screen';

type AppScreenProps = {
  rentObjecsNumber: number;
}

function App({rentObjecsNumber}: AppScreenProps): JSX.Element {
  return (
    <MainScreen rentObjecsNumber={rentObjecsNumber} />
  );
}

export default App;
