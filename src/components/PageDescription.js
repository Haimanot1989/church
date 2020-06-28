import React from "react";

export const PageDescriber = ({ title, bodyText }) => {
  return (
    <section className="jumbotron text-center">
      <h1 className="jumbotron-heading">{title}</h1>
      <p className="lead text-muted">{bodyText}</p>
    </section>
  );
};
