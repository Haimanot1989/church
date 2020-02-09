import React from "react";
import { GoLocation } from "react-icons/go";
export const MainLocation = ({ placeName, map }) => {
  return (
    <div>
      <p>
        <a href={map}>
          <GoLocation /> {placeName}
        </a>
      </p>
    </div>
  );
};
