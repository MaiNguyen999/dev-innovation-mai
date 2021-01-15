import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../LogIn/index';
import ExamplePageOne from '../Example/index';

// const Pages = () => (
//   <Switch>
//     <Route path="/pages/one" component={ExamplePageOne} />
//   </Switch>
// );

// const wrappedRoutes = () => (
//   <div>
//     {/* <Layout /> */}
//     <div className="container__wrap">
//       <Route path="/pages" component={Pages} />
//     </div>
//   </div>
// );

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <div className="container__wrap">
          <Route exact path="/" component={ExamplePageOne} />
        </div>
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
