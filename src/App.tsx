import { Provider } from 'react-redux';
import './App.css';
import AddUser from './pages/add-user/AddUser';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <AddUser />
    </Provider>
  );
}

export default App;
