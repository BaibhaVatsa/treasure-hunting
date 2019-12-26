import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './views/public/LoginPage/LoginPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Suspense fallback={<LoadingPage />}> */}
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Redirect from="*" to="/home" />
          </Switch>
        {/* </Suspense> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
