import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Loader } from "../components";

const Home = lazy(() => import("../pages/home"));
const Inventory = lazy(() => import("../pages/inventory"));

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/inventory" exact component={Inventory} />
          <Route component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
