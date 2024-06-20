import "./assets/css/index.less";
import "normalize.css";
import "./assets/css/reset.less";
import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const App = memo(() => {
  return (
    <div className="app">
      <Header />
      <Suspense fallback="loading">
        <div className="page">{useRoutes(routes)}</div>
      </Suspense>

      <Footer />
    </div>
  );
});

export default App;
