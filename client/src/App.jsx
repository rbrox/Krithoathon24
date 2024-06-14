import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import "./index.css";

const App = () => (
  <div>
    <Header />
    <main>
      <Article />
    </main>
    <Footer />
  </div>
);

export default App;
