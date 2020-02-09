import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import PlaceOfWorship from "./components/PlaceOfWorship";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Main path="/" />
        <Main path="/conferences" />
        <PlaceOfWorship path="place-of-worship" />
      </Router>
      <Footer />
    </>
  );
}

export default App;
