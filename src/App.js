import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

function App() {
  return (
    <>
      <Header />
      <main id="mainContainer">
        <div className="container">
          <ProductsContainer />
          <MessageContainer />  
          <CartContainer /> 
        </div>
      </main>
      <footer className="page-footer center-on-small-only">
        <Footer />
      </footer>
    </>
  );
}

export default App;


