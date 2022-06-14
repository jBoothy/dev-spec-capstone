import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="dev-1vjn1oyg.us.auth0.com"
    clientId="2kE9uNoW4V1gg19CsN8Nb7iwA7LtgM9l"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

export { default } from "./Login";
