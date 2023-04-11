import React from "react";
import DoctrineOfSalvationCard from "./DoctrineOfSalvationCard";

const DoctrineOfSalvation = ({ additionalStyle }) => {
  return (
    <div className={`album py-5 ${additionalStyle}`}>
      <div className="container">
        <div className="row">
          <DoctrineOfSalvationCard />
        </div>
      </div>
    </div>
  );
};
export default DoctrineOfSalvation;
