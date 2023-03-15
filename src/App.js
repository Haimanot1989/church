import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import PlaceOfWorship from "./components/PlaceOfWorship";
import Conferences from "./components/Conferences";
import StatementOfBeliefs from "./components/StatementOfBeliefs";
import Books from "./components/Books";
import Sermons from "./components/Sermons";
import Announcements from "./components/Announcements";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Conferences path="/" />
        <Conferences path="/conferences" />
        <StatementOfBeliefs path="/statement-of-beliefs" />
        <PlaceOfWorship path="/place-of-worship" />
        <Books path="books" />
        <Sermons path="sermons" />
        <Announcements path="announcements" />
      </Router>
      <Footer />
    </>
  );
}

export default App;
