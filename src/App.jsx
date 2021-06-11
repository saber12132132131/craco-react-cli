import React, { memo, Suspense } from "react";
import { HashRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "mobx-react";
import store from "./store/index";
import routes from "./router";

import DevTools,{configureDevtool} from "mobx-react-devtools"; // mobx调试工具
import Header from "@/components/header";
import Footer from "@/components/footer";
configureDevtool({
  // Turn on logging changes button programmatically:
  logEnabled: true,
  // Turn off displaying components updates button programmatically:
  updatesEnabled: false,
  // Log only changes of type `reaction`
  // (only affects top-level messages in console, not inside groups)
  logFilter: change => change.type === 'reaction',
});

export default memo(function App() {
  return (
    <Provider {...store}>
      <HashRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {renderRoutes(routes)}
            <DevTools noPanel  />
          </Switch>
        </Suspense>
        <Footer />
      </HashRouter>
    </Provider>
  );
});
