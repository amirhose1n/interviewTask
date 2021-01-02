
import AppRouter from './router';
import Style from './Style';
import { Provider } from 'react-redux';
import store from './state/store';

function App() {
  return (
  <Style>
      <Provider store={store}>
        <AppRouter />
      </Provider>
  </Style>
);
}

export default App;
