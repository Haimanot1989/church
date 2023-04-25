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
import DoctrineOfSalvation from "./components/DoctrineOfSalvation";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Home path="/" />
        <Conferences path="/conferences" />
        <DoctrineOfSalvation
          path="/doctrine-of-salvation"
          additionalStyle="position-main"
        />
        <DoctrineOfSalvation
          path="/podcast"
          additionalStyle="position-main"
        />
        <StatementOfBeliefs path="/statement-of-beliefs" />
        <PlaceOfWorship path="/place-of-worship" />
        <Books path="books" />
        <Sermons path="sermons" />
        <Announcements path="announcements" />
        <AboutUs path="about-us" />
      </Router>
      <Footer />
    </>
  );
}

export default App;
