import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { App } from "@routes/App";
import { Layout } from "@pages/Layout";
import { UserProvider } from "@context/index.jsx";

import "@styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <HelmetProvider>
        <Layout>
          <App />
        </Layout>
      </HelmetProvider>
    </UserProvider>
  </React.StrictMode>
);
