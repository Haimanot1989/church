import React from "react";
import { PageDescriber } from "./PageDescription";

const AboutUs = function() {
  let pageDescription = {
    title: "Jesus Alone is God Church of Europe",
    bodyTexts: [
      "We wish to inform the church members in Europe that the board members are working on crafting together the new organization in Europe. We are drafting two documents currently: Statement of Faith & By-Laws. We will be publishing these documents on the website in due course. Please bear with us.",
      "God bless!",
      "Board members of Europe"
    ]
  };
  return (
    <>
      <main role="main" className="container mb-2 position-main">
        <PageDescriber {...pageDescription} />
      </main>
    </>
  );
};

export default AboutUs;
