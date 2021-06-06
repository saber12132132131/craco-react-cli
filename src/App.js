import React, { memo, Suspense } from "react";
import { HashRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import store from "./store";
import routes from "./router";

import Header from "@/components/header";
import Footer from "@/components/footer";


export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>{renderRoutes(routes)}</Switch>
        </Suspense>
        <Footer />
      </HashRouter>
    </Provider>
  );
});
