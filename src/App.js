import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import PlaceOfWorship from "./components/PlaceOfWorship";
import Conferences from "./components/Conferences";
import Books from "./components/Books";
import Sermons from "./components/Sermons";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Conferences path="/" />
        <Conferences path="/conferences" />
        <PlaceOfWorship path="/place-of-worship" />
        <Books path="books" />
        <Sermons path="sermons" />
      </Router>
      <Footer />
    </>
  );
}

export default App;
