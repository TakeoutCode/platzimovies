import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@routes/App";
import { Layout } from "@pages/Layout";

import "@styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
