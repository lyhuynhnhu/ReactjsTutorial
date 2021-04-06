import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProtectPage from './react-router/protect-page';
import ProductDetail from './react-router/product-detail';
import ErrorPage from './react-router/error-page';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import ListProducts from './react-router/list-product'

function PrivateRoute() {
  const auth = false;
  return (
    auth ? <div>Protected Page</div> : <div> You don't have permission</div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={ListProducts} />
        <Route path="/product/:id" component={ProductDetail} />
        <PrivateRoute path="/protected-page" component={ProtectPage}/>
        <Route path="/home" component={ErrorPage}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
