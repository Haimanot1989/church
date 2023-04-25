import React from "react";

export const PageDescriber = ({ title, bodyTexts }) => {
  return (
    <section className="jumbotron text-center">
      <h1 className="jumbotron-heading">{title}</h1>
      {bodyTexts && bodyTexts.map((t, i) => (
        <p key={i} className="lead text-muted">
          {t}
        </p>
      ))}
    </section>
  );
};
