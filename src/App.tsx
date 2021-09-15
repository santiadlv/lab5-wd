import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <ProductDetail/>
    </React.Fragment>
  );
}

export default App;
