import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import WebcamCapture from "./components/WebCapture";
import "./index.css";

const App = () => (
  <div>
    <Header />
    <main>
      <Article />
      <WebcamCapture />
    </main>
    <Footer />
  </div>
);

export default App;
