import React, { memo, Suspense } from "react";
import { HashRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "mobx-react";
import store from "./store/index";
import routes from "./router";

import DevTools from "mobx-react-devtools"; // mobx调试工具
import Header from "@/components/header";
import Footer from "@/components/footer";

export default memo(function App() {
  return (
    <Provider {...store}>
      <HashRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {renderRoutes(routes)}
            <DevTools />
          </Switch>
        </Suspense>
        <Footer />
      </HashRouter>
    </Provider>
  );
});
