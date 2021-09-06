import logo from './logo.svg';
import './App.css';

import configureStore from './hooks-store/products-store';

import ProductsList from './components/ProductsList/ProductsList';

function App() {
  configureStore()
  
  return (
    <div className="App">

      <ProductsList/>
    </div>
  );
}

export default App;
