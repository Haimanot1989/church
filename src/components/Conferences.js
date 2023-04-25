import React from "react";
import Cards from "./Cards";
import { PageDescriber } from "./PageDescription";

const Conferences = function() {
  let pageDescription = {
    title: "Jesus Alone is God Church of Europe",
    bodyTexts: ["We have several conferences in different parts of Europe and worldwide. You are very welcome to join us!"]
  };
  return (
    <>
      <main role="main" className="container mb-2 position-main">
        <PageDescriber {...pageDescription} />
        <Cards></Cards>
      </main>
    </>
  );
};

export default Conferences;
