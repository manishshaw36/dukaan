import React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';

import SiderLayout from '../slider-layout/slider-layout.component';
import HomeStore from '../home-store/home-store.component';

export default function App(props: any) {
  return (
    <HashRouter>
      <SiderLayout>
        <Switch>
          <Route path="/home" exact component={HomeStore} />
          <Redirect path='/**' to='/home' />
        </Switch>
      </SiderLayout>
    </HashRouter>
  );
}